import type { Chapter } from "./chapters";

export const nestjsExtraChapters: Chapter[] = [
  {
    id: "pipes",
    title: "Pipes — Input Validate Karo",
    titleEn: "Pipes — Input Validation",
    emoji: "🔩",
    category: "Intermediate",
    description: "Pipes se request data validate aur transform karo — built-in aur custom pipes",
    descriptionEn: "Use pipes to validate and transform request data — built-in and custom pipes",
    sections: [
      {
        heading: "Pipe kya hota hai?",
        content: `Pipe ek class hai jo request data ko Controller tak pahunchne se pehle **validate** ya **transform** karta hai. Socho jaise ek filter — andar aane se pehle data saaf hota hai.

**Pipe ke do kaam:**
- **Validation** — Data sahi format mein hai ya nahi check karo. Agar galat ho, error throw karo
- **Transformation** — Data ka type change karo (string "42" → number 42)

**Built-in Pipes (NestJS mein already hain):**
- **ValidationPipe** — class-validator ke saath DTO validate karo
- **ParseIntPipe** — string → number convert karo
- **ParseBoolPipe** — string → boolean convert karo
- **ParseUUIDPipe** — UUID format validate karo
- **DefaultValuePipe** — default value set karo
- **ParseArrayPipe** — array parse karo
- **ParseEnumPipe** — enum validate karo`,
        diagram: `
PIPE EXECUTION FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTTP Request → { id: "abc", age: "25" }
        │
        ▼
  ┌─────────────────────────────────┐
  │           PIPE                  │
  │  1. ParseIntPipe → id = NaN?    │
  │     → 400 Bad Request!          │
  │  2. ValidationPipe → age < 0?   │
  │     → 422 Unprocessable!        │
  │  3. Transform → "25" → 25       │
  └─────────────────────────────────┘
        │ (agar sab theek hai)
        ▼
  Controller Handler
  findOne(id: 42, age: 25)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// Built-in Pipes — direct use karo
import { 
  Controller, Get, Post, Body, Param,
  ParseIntPipe, ParseUUIDPipe, DefaultValuePipe,
  ParseBoolPipe, ParseArrayPipe, Query
} from '@nestjs/common';

@Controller('users')
export class UsersController {

  // GET /users/42 — "42" ko number mein convert karo
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // id ab number hai, string nahi
    return this.usersService.findOne(id);
  }

  // GET /users/550e8400-e29b-41d4... — UUID validate karo
  @Get('by-uuid/:uuid')
  findByUuid(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.findByUuid(uuid);
  }

  // GET /users?active=true — boolean parse karo
  @Get()
  findAll(
    @Query('active', new DefaultValuePipe(true), ParseBoolPipe) active: boolean,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll({ active, page });
  }

  // GET /users?ids=1,2,3 — array parse karo
  @Get('by-ids')
  findMany(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[]
  ) {
    return this.usersService.findByIds(ids);
  }
}`,
        language: "typescript",
        tip: "ParseIntPipe string ko number mein convert karta hai. Agar '42abc' jaisa string aaye, automatic 400 Bad Request return karta hai.",
      },
      {
        heading: "ValidationPipe — DTO ke saath deep validation",
        content: `**ValidationPipe** sabse powerful pipe hai. Isko class-validator aur class-transformer ke saath use karo.

**Install karo:**`,
        code: `# Dependencies install karo
npm install class-validator class-transformer

# ─────────────────────────────────────
# src/users/dto/create-user.dto.ts
import {
  IsString, IsEmail, IsInt, Min, Max,
  IsOptional, IsEnum, MinLength, MaxLength,
  IsNotEmpty, IsUrl, IsPhoneNumber, Matches,
  ValidateNested, Type, IsArray
} from 'class-validator';
import { Type as TransformType } from 'class-transformer';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  city: string;

  @IsString()
  @MinLength(6)
  @MaxLength(6)
  pincode: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name khali nahi ho sakta' })
  @MinLength(2, { message: 'Name kam se kam 2 characters ka hona chahiye' })
  @MaxLength(50)
  name: string;

  @IsEmail({}, { message: 'Valid email chahiye' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password kam se kam 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password mein uppercase, lowercase aur number hona chahiye'
  })
  password: string;

  @IsInt()
  @Min(18, { message: '18 se kam age accept nahi' })
  @Max(100)
  age: number;

  @IsEnum(UserRole, { message: 'Valid role: admin, user, moderator' })
  @IsOptional()
  role?: UserRole = UserRole.USER;

  @IsUrl({}, { message: 'Valid URL chahiye' })
  @IsOptional()
  website?: string;

  @ValidateNested()             // nested object validate karo
  @Type(() => AddressDto)       // transform karo
  @IsOptional()
  address?: AddressDto;

  @IsArray()
  @IsString({ each: true })     // har item string hona chahiye
  @IsOptional()
  tags?: string[];
}

// ─────────────────────────────────────
// main.ts mein global ValidationPipe lagao
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // extra fields automatically strip karo
    forbidNonWhitelisted: true, // extra fields pe error do
    transform: true,        // DTO class mein auto-transform karo
    transformOptions: {
      enableImplicitConversion: true, // query params auto-convert
    },
  }));
  
  await app.listen(3000);
}`,
        language: "typescript",
        tip: "whitelist: true bahut important option hai — yeh DTO mein defined fields ke alawa sab strip kar deta hai. Security ke liye use karo hamesha.",
        warning: "transform: true enable karna mat bhoolo. Bina iske query params strings rahenge (number nahi banenge), chahe @IsInt() laga ho.",
      },
      {
        heading: "Custom Pipe — Apna Pipe banao",
        content: `Jab built-in pipes kaafi nahi hote, custom pipe banao. Example: phone number validate karo, ya custom business rule apply karo.`,
        code: `// src/common/pipes/parse-positive-int.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    
    if (isNaN(val)) {
      throw new BadRequestException(\`'\${value}' valid number nahi hai\`);
    }
    if (val <= 0) {
      throw new BadRequestException('Number positive hona chahiye');
    }
    return val;
  }
}

// ─────────────────────────────────────
// Trim Pipe — whitespace remove karo
@Injectable()
export class TrimPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object' && value !== null) {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [
          k,
          typeof v === 'string' ? v.trim() : v
        ])
      );
    }
    return value;
  }
}

// ─────────────────────────────────────
// Use karo:
@Get(':id')
findOne(@Param('id', ParsePositiveIntPipe) id: number) {
  return this.service.findOne(id);
}

@Post()
create(@Body(TrimPipe) dto: CreateUserDto) {
  return this.service.create(dto);
}`,
        language: "typescript",
        tip: "Custom pipe mein transform() method mein BadRequestException throw karo agar validation fail ho. NestJS automatically 400 response bhejta hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "What is a Pipe?",
        content: `A Pipe is a class that **validates** or **transforms** incoming request data before it reaches the Controller. Think of it like a filter — data gets cleaned before entering your system.

**Two jobs of a Pipe:**
- **Validation** — Check if data is in the right format. If not, throw an error automatically
- **Transformation** — Change the data type (string "42" → number 42)

**Built-in Pipes (already in NestJS):**
- **ValidationPipe** — Validate DTOs with class-validator decorators
- **ParseIntPipe** — Convert string to number
- **ParseBoolPipe** — Convert string to boolean
- **ParseUUIDPipe** — Validate UUID format
- **DefaultValuePipe** — Provide a default value if missing
- **ParseArrayPipe** — Parse comma-separated values into array
- **ParseEnumPipe** — Validate against an enum`,
        diagram: `
PIPE EXECUTION FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTTP Request → { id: "abc", age: "25" }
        │
        ▼
  ┌─────────────────────────────────┐
  │           PIPE                  │
  │  1. ParseIntPipe → id = NaN?    │
  │     → 400 Bad Request!          │
  │  2. ValidationPipe → age < 0?   │
  │     → 422 Unprocessable!        │
  │  3. Transform → "25" → 25       │
  └─────────────────────────────────┘
        │ (if all checks pass)
        ▼
  Controller Handler
  findOne(id: 42, age: 25)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// Built-in Pipes — use them directly
import { 
  Controller, Get, Post, Body, Param,
  ParseIntPipe, ParseUUIDPipe, DefaultValuePipe,
  ParseBoolPipe, ParseArrayPipe, Query
} from '@nestjs/common';

@Controller('users')
export class UsersController {

  // GET /users/42 — converts "42" string to number
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // id is now a number, not a string
    return this.usersService.findOne(id);
  }

  // GET /users/550e8400-... — validates UUID format
  @Get('by-uuid/:uuid')
  findByUuid(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.findByUuid(uuid);
  }

  // GET /users?active=true — parses boolean
  @Get()
  findAll(
    @Query('active', new DefaultValuePipe(true), ParseBoolPipe) active: boolean,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll({ active, page });
  }
}`,
        language: "typescript",
        tip: "ParseIntPipe converts a string to a number. If '42abc' is passed, it automatically returns a 400 Bad Request error.",
      },
      {
        heading: "ValidationPipe — Deep validation with DTOs",
        content: `**ValidationPipe** is the most powerful pipe. Use it with class-validator and class-transformer packages.

**First, install the required packages:**`,
        code: `# Install dependencies
npm install class-validator class-transformer

# ─────────────────────────────────────
# src/users/dto/create-user.dto.ts
import {
  IsString, IsEmail, IsInt, Min, Max,
  IsOptional, IsEnum, MinLength, MaxLength,
  IsNotEmpty, Matches, ValidateNested, Type, IsArray
} from 'class-validator';

enum UserRole { ADMIN = 'admin', USER = 'user' }

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(50)
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password must contain uppercase, lowercase and a number'
  })
  password: string;

  @IsInt()
  @Min(18, { message: 'Age must be 18 or above' })
  @Max(100)
  age: number;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole = UserRole.USER;
}

// ─────────────────────────────────────
// In main.ts — register global ValidationPipe
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,              // strip unknown fields
  forbidNonWhitelisted: true,   // throw error on extra fields
  transform: true,              // auto-convert to DTO types
}));`,
        language: "typescript",
        tip: "whitelist: true is very important for security — it strips any fields not defined in your DTO, preventing mass assignment vulnerabilities.",
        warning: "Always enable transform: true. Without it, query parameters remain as strings even if you use @IsInt(), since HTTP always sends strings.",
      },
      {
        heading: "Custom Pipe — Build your own",
        content: `When built-in pipes are not enough, create a custom pipe. Example: validate a custom business rule, trim whitespace, or parse a special format.`,
        code: `// src/common/pipes/parse-positive-int.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    
    if (isNaN(val)) {
      throw new BadRequestException(\`'\${value}' is not a valid number\`);
    }
    if (val <= 0) {
      throw new BadRequestException('Number must be positive');
    }
    return val;
  }
}

// Use in controller:
@Get(':id')
findOne(@Param('id', ParsePositiveIntPipe) id: number) {
  return this.service.findOne(id);
}`,
        language: "typescript",
        tip: "In a custom pipe, throw BadRequestException in the transform() method if validation fails. NestJS automatically returns a 400 response.",
      },
    ],
    mcqs: [
      {
        q: "ValidationPipe mein 'whitelist: true' kya karta hai?",
        options: [
          "Sirf whitelisted IPs allow karta hai",
          "DTO mein defined nahi fields automatically strip karta hai",
          "Response whitelist karta hai",
          "Password whitelist validate karta hai",
        ],
        correct: 1,
        explain: "whitelist: true DTO mein jo @IsString() jaisi decorators se define ki gayi fields ke alawa sab strip kar deta hai. Security ke liye zaroori.",
      },
      {
        q: "GET /users/abc pe ParseIntPipe kya karega?",
        options: [
          "NaN return karega",
          "0 return karega",
          "400 Bad Request throw karega",
          "undefined return karega",
        ],
        correct: 2,
        explain: "ParseIntPipe parseInt() se string convert karta hai. Agar result NaN ho, automatically 400 Bad Request throw karta hai.",
      },
      {
        q: "Pipe kaha execute hota hai?",
        options: [
          "Response bhejne ke baad",
          "Guard ke baad, Controller se pehle",
          "Middleware ke pehle",
          "Service mein",
        ],
        correct: 1,
        explain: "Pipe Guard ke baad aur Controller handler se pehle execute hota hai. Flow: Middleware → Guard → Interceptor → Pipe → Controller.",
      },
    ],
    mcqsEn: [
      {
        q: "What does 'whitelist: true' do in ValidationPipe?",
        options: [
          "Only allows whitelisted IPs",
          "Automatically strips fields not defined in the DTO",
          "Whitelists the response",
          "Validates password whitelist",
        ],
        correct: 1,
        explain: "whitelist: true removes any properties from the incoming object that do not have a validation decorator in the DTO. Essential for security.",
      },
      {
        q: "What happens when ParseIntPipe receives 'abc' on GET /users/abc?",
        options: [
          "Returns NaN",
          "Returns 0",
          "Throws 400 Bad Request automatically",
          "Returns undefined",
        ],
        correct: 2,
        explain: "ParseIntPipe uses parseInt() to convert. If the result is NaN, it automatically throws a 400 Bad Request exception.",
      },
    ],
    cheatsheet: [
      "ParseIntPipe — string → number (URL params)",
      "ParseBoolPipe — 'true'/'false' → boolean",
      "ParseUUIDPipe — UUID format validate karo",
      "DefaultValuePipe(val) — default value set karo",
      "ValidationPipe({whitelist,transform}) — DTO validate karo",
      "@UsePipes(pipe) — specific route pe pipe lagao",
      "useGlobalPipes(pipe) — sab routes pe lage",
      "@IsString(), @IsEmail(), @Min() — class-validator decorators",
    ],
    cheatsheetEn: [
      "ParseIntPipe — convert string → number (URL params)",
      "ParseBoolPipe — convert 'true'/'false' → boolean",
      "ParseUUIDPipe — validate UUID format",
      "DefaultValuePipe(val) — set a default value if missing",
      "ValidationPipe({whitelist,transform}) — validate DTO",
      "@UsePipes(pipe) — apply pipe to specific route",
      "useGlobalPipes(pipe) — apply to all routes globally",
      "@IsString(), @IsEmail(), @Min() — class-validator decorators",
    ],
    revision: [
      "Pipe = data filter (validate + transform) Controller se pehle",
      "ValidationPipe + class-validator = powerful DTO validation",
      "whitelist: true = DTO se bahar ke fields strip karo",
      "transform: true = auto type conversion (string → number/boolean)",
      "Custom pipe mein PipeTransform implement karo",
    ],
    revisionEn: [
      "Pipe = data filter (validate + transform) before Controller",
      "ValidationPipe + class-validator = powerful DTO validation",
      "whitelist: true = strip fields not in DTO",
      "transform: true = auto type conversion",
      "Custom pipe = implement PipeTransform interface",
    ],
  },

  {
    id: "interceptors",
    title: "Interceptors — Request/Response Transform",
    titleEn: "Interceptors — Request & Response Transformation",
    emoji: "🔄",
    category: "Intermediate",
    description: "Interceptors se request/response ko modify karo — logging, caching, response transform",
    descriptionEn: "Use interceptors to modify requests/responses — logging, caching, response transformation",
    sections: [
      {
        heading: "Interceptor kya hota hai?",
        content: `Interceptor ek AOP (Aspect-Oriented Programming) concept hai. Yeh Controller se **pehle** aur **baad mein** dono run kar sakta hai.

**Interceptor ke uses:**
- Response ka format change karo (sab responses { data: ... } mein wrap karo)
- Request/response logging karo
- Caching implement karo
- Execution time measure karo
- Error handling centralize karo
- Response se sensitive data hide karo`,
        diagram: `
INTERCEPTOR FLOW (Before + After):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Request Aata Hai
        │
        ▼
  ┌─────────────────┐
  │  Interceptor    │ ← "Before" logic yahan (request modify)
  │  (Before)       │
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │   Controller    │ ← actual route handler
  │   + Service     │
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │  Interceptor    │ ← "After" logic yahan (response modify)
  │  (After)        │
  └────────┬────────┘
           │
           ▼
  Response Jaata Hai

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// src/common/interceptors/logging.interceptor.ts
import {
  Injectable, NestInterceptor, ExecutionContext,
  CallHandler, Logger
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const start = Date.now();

    // "Before" — request aane pe log karo
    this.logger.log(\`→ \${method} \${url}\`);

    return next.handle().pipe(
      tap({
        // "After" — response jaane pe log karo
        next: () => {
          const ms = Date.now() - start;
          this.logger.log(\`← \${method} \${url} [\${ms}ms]\`);
        },
        error: (err) => {
          const ms = Date.now() - start;
          this.logger.error(\`✗ \${method} \${url} [\${ms}ms] \${err.message}\`);
        },
      }),
    );
  }
}`,
        language: "typescript",
      },
      {
        heading: "Response Transform Interceptor — Uniform format",
        content: `Real projects mein sab responses ka same format chahiye hota hai. Interceptor se globally enforce karo:`,
        code: `// src/common/interceptors/transform.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}

// ─────────────────────────────────────
// Caching Interceptor — simple in-memory cache
import { CACHE_KEY_METADATA } from '@nestjs/cache-manager';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
  private cache = new Map<string, { data: any; expiresAt: number }>();
  
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    
    // Sirf GET requests cache karo
    if (request.method !== 'GET') return next.handle();
    
    const key = request.url;
    const cached = this.cache.get(key);
    
    if (cached && cached.expiresAt > Date.now()) {
      return of(cached.data); // cache hit
    }
    
    return next.handle().pipe(
      tap((data) => {
        this.cache.set(key, { data, expiresAt: Date.now() + 30000 }); // 30s
      }),
    );
  }
}

// ─────────────────────────────────────
// Use karo — globally ya specific routes pe
// main.ts (global):
app.useGlobalInterceptors(new TransformInterceptor(), new LoggingInterceptor());

// Controller pe specific:
@UseInterceptors(TransformInterceptor)
@Controller('users')
export class UsersController {}

// Method pe specific:
@UseInterceptors(LoggingInterceptor)
@Get()
findAll() {}`,
        language: "typescript",
        tip: "TransformInterceptor globally use karo taaki sab API responses consistent format mein hon — frontend team ko bohot asaani hoti hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "What is an Interceptor?",
        content: `An Interceptor is an AOP (Aspect-Oriented Programming) concept. It can run both **before** and **after** the Controller handler.

**Common uses of Interceptors:**
- Wrap all responses in a standard format: { success: true, data: ... }
- Log every request and response with timing info
- Implement in-memory or Redis-based caching
- Measure execution time for performance monitoring
- Centralize error handling and transformation
- Remove sensitive fields from responses`,
        diagram: `
INTERCEPTOR FLOW (Before + After):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Request Comes In
        │
        ▼
  ┌─────────────────┐
  │  Interceptor    │ ← "Before" logic (modify request)
  │  (Before)       │
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │   Controller    │ ← actual route handler
  │   + Service     │
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │  Interceptor    │ ← "After" logic (modify response)
  │  (After)        │
  └────────┬────────┘
           │
           ▼
  Response Goes Out

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// src/common/interceptors/logging.interceptor.ts
import {
  Injectable, NestInterceptor, ExecutionContext,
  CallHandler, Logger
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const start = Date.now();

    this.logger.log(\`→ \${method} \${url}\`);

    return next.handle().pipe(
      tap({
        next: () => this.logger.log(\`← \${method} \${url} [\${Date.now() - start}ms]\`),
        error: (err) => this.logger.error(\`✗ \${method} \${url} \${err.message}\`),
      }),
    );
  }
}`,
        language: "typescript",
      },
      {
        heading: "Transform Interceptor — Uniform API response format",
        content: `In real projects, all API responses should follow the same format. Enforce this globally with an interceptor:`,
        code: `// src/common/interceptors/transform.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}

// In main.ts — apply globally:
app.useGlobalInterceptors(new TransformInterceptor(), new LoggingInterceptor());

// Or on specific controller:
@UseInterceptors(TransformInterceptor)
@Controller('users')
export class UsersController {}`,
        language: "typescript",
        tip: "Use TransformInterceptor globally so all API responses share the same structure — this makes frontend integration much simpler.",
      },
    ],
    mcqs: [
      {
        q: "Interceptor kis liye use nahi hota?",
        options: [
          "Response format change karna",
          "Database query likhna",
          "Request/response logging",
          "Execution time measure karna",
        ],
        correct: 1,
        explain: "Database queries Service mein hoti hain, Interceptor mein nahi. Interceptor cross-cutting concerns ke liye hai (logging, caching, transform).",
      },
      {
        q: "next.handle() kya return karta hai?",
        options: [
          "Promise",
          "Observable",
          "Callback",
          "Array",
        ],
        correct: 1,
        explain: "next.handle() Observable return karta hai jo response stream represent karta hai. .pipe(map(), tap()) se transform kar sakte ho.",
      },
    ],
    mcqsEn: [
      {
        q: "What should NOT be done inside an Interceptor?",
        options: [
          "Changing response format",
          "Writing database queries",
          "Request/response logging",
          "Measuring execution time",
        ],
        correct: 1,
        explain: "Database queries belong in the Service layer, not in Interceptors. Interceptors are for cross-cutting concerns like logging, caching, and transformation.",
      },
    ],
    cheatsheet: [
      "@UseInterceptors(X) — controller ya method pe lagao",
      "useGlobalInterceptors(X) — globally lagao",
      "next.handle() — controller execute karo (Observable)",
      "pipe(map(data => ...)) — response transform karo",
      "pipe(tap({ next, error })) — side effects (logging)",
      "of(cachedData) — cache se return karo",
    ],
    cheatsheetEn: [
      "@UseInterceptors(X) — apply to controller or method",
      "useGlobalInterceptors(X) — apply globally",
      "next.handle() — execute the controller handler",
      "pipe(map(data => ...)) — transform the response",
      "pipe(tap({ next, error })) — side effects (logging)",
      "of(cachedData) — return from cache",
    ],
    revision: [
      "Interceptor = before + after controller dono run kar sakta hai",
      "next.handle() = Observable — pipe() se modify karo",
      "map() = response transform, tap() = side effects (logging)",
      "Global interceptor = main.ts mein useGlobalInterceptors()",
    ],
    revisionEn: [
      "Interceptor = runs both before AND after the controller",
      "next.handle() returns an Observable — use .pipe() to modify",
      "map() = transform response data, tap() = side effects",
      "Global interceptor = register in main.ts with useGlobalInterceptors()",
    ],
  },

  {
    id: "exception-filters",
    title: "Exception Filters — Errors Handle Karo",
    titleEn: "Exception Filters — Centralized Error Handling",
    emoji: "🚨",
    category: "Intermediate",
    description: "Custom exception filters se errors ko centralize karo aur consistent error responses bhejo",
    descriptionEn: "Use exception filters to centralize error handling and send consistent error responses",
    sections: [
      {
        heading: "NestJS Exception Handling — Built-in exceptions",
        content: `NestJS mein pehle se bahut saare HTTP exceptions hain. Inhe Service ya Controller mein throw karo — NestJS automatically proper JSON response bhejta hai.

**Common Built-in Exceptions:**
- **NotFoundException** — 404 Not Found
- **BadRequestException** — 400 Bad Request
- **UnauthorizedException** — 401 Unauthorized
- **ForbiddenException** — 403 Forbidden
- **ConflictException** — 409 Conflict
- **InternalServerErrorException** — 500 Internal Server Error
- **UnprocessableEntityException** — 422 Unprocessable Entity
- **TooManyRequestsException** — 429 Too Many Requests`,
        code: `// Service mein exceptions throw karo
import {
  NotFoundException, BadRequestException,
  ConflictException, ForbiddenException,
  UnauthorizedException, InternalServerErrorException
} from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      // 404 + message + optional details
      throw new NotFoundException({
        message: \`User #\${id} nahi mila\`,
        error: 'User Not Found',
        statusCode: 404,
      });
    }
    return user;
  }

  async create(dto: CreateUserDto) {
    const exists = await this.repo.findOne({ where: { email: dto.email } });
    if (exists) {
      throw new ConflictException('Yeh email already registered hai');
    }
    // ...
  }

  async deleteUser(id: number, requesterId: number) {
    const user = await this.findOne(id);
    if (user.id !== requesterId) {
      throw new ForbiddenException('Aap doosron ke accounts delete nahi kar sakte');
    }
    await this.repo.delete(id);
  }
}

// Response format (automatic):
// {
//   "statusCode": 404,
//   "message": "User #99 nahi mila",
//   "error": "User Not Found"
// }`,
        language: "typescript",
      },
      {
        heading: "Custom Exception Filter — Apna error format banao",
        content: `Real projects mein error responses ka specific format hota hai. Custom Exception Filter se control karo.`,
        code: `// src/common/filters/http-exception.filter.ts
import {
  ExceptionFilter, Catch, ArgumentsHost,
  HttpException, HttpStatus, Logger
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)  // sirf HttpException catch karo
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Error details extract karo
    const message =
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : (exceptionResponse as any).message || exception.message;

    const errorResponse = {
      success: false,
      statusCode: status,
      message: Array.isArray(message) ? message : [message],
      error: (exceptionResponse as any).error || exception.name,
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
    };

    this.logger.error(
      \`\${request.method} \${request.url}\`,
      JSON.stringify(errorResponse),
    );

    response.status(status).json(errorResponse);
  }
}

// ─────────────────────────────────────
// Sab exceptions catch karo (database errors bhi)
@Catch()  // koi bhi exception
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error — kuch gadbad ho gayi';

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

// ─────────────────────────────────────
// Register karo:
// main.ts (globally):
app.useGlobalFilters(new HttpExceptionFilter());

// Controller pe:
@UseFilters(HttpExceptionFilter)
@Controller('users')
export class UsersController {}`,
        language: "typescript",
        tip: "@Catch(HttpException) sirf HTTP exceptions catch karta hai. @Catch() bina argument ke sab kuch catch karta hai — database errors, TypeScript errors sab.",
        warning: "Production mein sensitive error details (stack traces, database errors) user ko mat bhejo. Unhe log file mein rakho aur user ko generic message do.",
      },
      {
        heading: "Custom Business Exceptions — Clean code pattern",
        content: `Clean code ke liye custom exception classes banao jo business domain se related hoon:`,
        code: `// src/common/exceptions/business.exceptions.ts
import { HttpException, HttpStatus } from '@nestjs/common';

// Base custom exception
export class BusinessException extends HttpException {
  constructor(
    message: string,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
    public readonly code?: string,  // machine-readable error code
  ) {
    super({ message, statusCode, code }, statusCode);
  }
}

// Specific business exceptions
export class UserAlreadyExistsException extends BusinessException {
  constructor(email: string) {
    super(\`Email '\${email}' already registered hai\`, HttpStatus.CONFLICT, 'USER_EXISTS');
  }
}

export class InsufficientBalanceException extends BusinessException {
  constructor(required: number, available: number) {
    super(
      \`Insufficient balance: ₹\${required} chahiye, ₹\${available} available hai\`,
      HttpStatus.UNPROCESSABLE_ENTITY,
      'INSUFFICIENT_BALANCE',
    );
  }
}

export class OrderExpiredException extends BusinessException {
  constructor(orderId: string) {
    super(\`Order #\${orderId} expire ho gayi hai\`, HttpStatus.GONE, 'ORDER_EXPIRED');
  }
}

// Use karo:
throw new UserAlreadyExistsException(dto.email);
throw new InsufficientBalanceException(1000, 500);`,
        language: "typescript",
        tip: "Custom exceptions se code readable ban jaata hai. throw new UserAlreadyExistsException() throw new ConflictException('...') se zyada expressive hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "NestJS Exception Handling — Built-in exceptions",
        content: `NestJS ships with many built-in HTTP exceptions. Throw them from your Service or Controller — NestJS automatically sends the proper JSON error response.

**Common Built-in Exceptions:**
- **NotFoundException** — 404 Not Found
- **BadRequestException** — 400 Bad Request
- **UnauthorizedException** — 401 Unauthorized
- **ForbiddenException** — 403 Forbidden
- **ConflictException** — 409 Conflict
- **InternalServerErrorException** — 500 Internal Server Error
- **UnprocessableEntityException** — 422 Unprocessable Entity
- **TooManyRequestsException** — 429 Too Many Requests`,
        code: `// Throw exceptions from the Service
import { NotFoundException, ConflictException, ForbiddenException } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(\`User #\${id} not found\`);
    }
    return user;
  }

  async create(dto: CreateUserDto) {
    const exists = await this.repo.findOne({ where: { email: dto.email } });
    if (exists) throw new ConflictException('Email already registered');
    // ...
  }
}

// Automatic JSON response:
// { "statusCode": 404, "message": "User #99 not found", "error": "Not Found" }`,
        language: "typescript",
      },
      {
        heading: "Custom Exception Filter — Control the error format",
        content: `In real projects you need a consistent error response shape. A Custom Exception Filter gives you full control:`,
        code: `// src/common/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const body = exception.getResponse();

    const message = typeof body === 'string' ? body : (body as any).message;

    const errorResponse = {
      success: false,
      statusCode: status,
      message: Array.isArray(message) ? message : [message],
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    this.logger.error(\`\${request.method} \${request.url}\`, JSON.stringify(errorResponse));
    response.status(status).json(errorResponse);
  }
}

// Register globally in main.ts:
app.useGlobalFilters(new HttpExceptionFilter());`,
        language: "typescript",
        tip: "@Catch(HttpException) catches only HTTP exceptions. Use @Catch() with no arguments to catch absolutely everything — database errors, TypeScript errors, etc.",
        warning: "Never expose stack traces or raw database errors to users in production. Log them server-side and send a generic message to the client.",
      },
      {
        heading: "Custom Business Exceptions — Clean, expressive code",
        content: `For clean architecture, create custom exception classes that describe business domain errors:`,
        code: `// src/common/exceptions/business.exceptions.ts
import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(
      { message: \`Email '\${email}' is already registered\`, code: 'USER_EXISTS' },
      HttpStatus.CONFLICT
    );
  }
}

export class InsufficientBalanceException extends HttpException {
  constructor(required: number, available: number) {
    super(
      { message: \`Need \${required}, only \${available} available\`, code: 'INSUFFICIENT_BALANCE' },
      HttpStatus.UNPROCESSABLE_ENTITY
    );
  }
}

// Usage — very readable:
throw new UserAlreadyExistsException(dto.email);`,
        language: "typescript",
        tip: "Custom exception classes make your code more readable and self-documenting. throw new UserAlreadyExistsException() is far more expressive than a generic ConflictException.",
      },
    ],
    mcqs: [
      {
        q: "User ID se user nahi milta — kaunsi exception throw karein?",
        options: ["BadRequestException", "ConflictException", "NotFoundException", "ForbiddenException"],
        correct: 2,
        explain: "NotFoundException 404 HTTP status ke saath response bhejta hai — yeh 'resource nahi mila' ke liye standard hai.",
      },
      {
        q: "@Catch() decorator bina argument ke kya karta hai?",
        options: [
          "Sirf HttpException catch karta hai",
          "Koi bhi exception catch nahi karta",
          "Har tarah ki exception catch karta hai",
          "Sirf database errors catch karta hai",
        ],
        correct: 2,
        explain: "@Catch() bina argument ke global catch hai — har type ki exception catch karta hai including unhandled errors.",
      },
    ],
    mcqsEn: [
      {
        q: "Which exception should you throw when a user ID is not found in the database?",
        options: ["BadRequestException", "ConflictException", "NotFoundException", "ForbiddenException"],
        correct: 2,
        explain: "NotFoundException sends a 404 HTTP status — this is the standard for 'requested resource does not exist'.",
      },
    ],
    cheatsheet: [
      "NotFoundException — 404 (resource nahi mila)",
      "BadRequestException — 400 (invalid input)",
      "UnauthorizedException — 401 (login nahi kiya)",
      "ForbiddenException — 403 (permission nahi)",
      "ConflictException — 409 (already exists)",
      "@Catch(HttpException) — sirf HTTP exceptions catch karo",
      "@Catch() — sab exceptions catch karo",
      "useGlobalFilters(filter) — globally register karo",
    ],
    cheatsheetEn: [
      "NotFoundException — 404 (resource not found)",
      "BadRequestException — 400 (invalid input)",
      "UnauthorizedException — 401 (not logged in)",
      "ForbiddenException — 403 (no permission)",
      "ConflictException — 409 (already exists)",
      "@Catch(HttpException) — catch only HTTP exceptions",
      "@Catch() — catch all exceptions",
      "useGlobalFilters(filter) — register globally",
    ],
    revision: [
      "Built-in exceptions throw karo — NestJS auto JSON response bhejta hai",
      "@Catch(HttpException) = HTTP errors, @Catch() = sab errors",
      "Custom filter mein response.status(status).json(errorResponse) karo",
      "Custom exception classes = clean, readable code",
    ],
    revisionEn: [
      "Throw built-in exceptions — NestJS automatically sends JSON error response",
      "@Catch(HttpException) = HTTP errors only, @Catch() = all errors",
      "In custom filter, call response.status(status).json(errorBody)",
      "Custom exception classes = clean and self-documenting code",
    ],
  },

  {
    id: "typeorm-relations",
    title: "TypeORM Relations — Tables ko Connect Karo",
    titleEn: "TypeORM Relations — Connecting Tables",
    emoji: "🔗",
    category: "Advanced",
    description: "OneToMany, ManyToMany relations — real-world database design samjho",
    descriptionEn: "OneToMany, ManyToMany relations — understand real-world relational database design",
    sections: [
      {
        heading: "Relations kya hote hain? — Real examples",
        content: `Database mein tables ek doosre se connected hote hain. TypeORM mein yeh connections easily define kar sakte ho.

**Relation Types:**
- **OneToOne** — Ek user ka ek profile (1:1)
- **OneToMany / ManyToOne** — Ek user ke bahut saare posts (1:N)
- **ManyToMany** — Ek student ke bahut saare courses, ek course mein bahut saare students (N:N)

**Real Examples:**
- User → Posts (OneToMany)
- Post → User (ManyToOne)
- Student → Courses (ManyToMany)
- User → Profile (OneToOne)`,
        diagram: `
DATABASE RELATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OneToMany (User → Posts):
  users table          posts table
  ┌────┬──────┐        ┌────┬─────────┬─────────┐
  │ id │ name │        │ id │ title   │ user_id │
  ├────┼──────┤        ├────┼─────────┼─────────┤
  │  1 │ Rahul│←──┐    │  1 │ Post A  │    1    │
  │  2 │ Priya│   └───→│  2 │ Post B  │    1    │
  └────┴──────┘        │  3 │ Post C  │    2    │
                       └────┴─────────┴─────────┘

ManyToMany (Students ↔ Courses):
  students             student_courses          courses
  ┌────┬──────┐        ┌────────────────┐        ┌────┬──────────┐
  │ id │ name │        │ student_id │ course_id │  │ id │ course   │
  ├────┼──────┤        ├────────────────┤        ├────┼──────────┤
  │  1 │ Ali  │──────→ │      1     │     1     │→ │  1 │ NestJS   │
  │  2 │ Sara │──────→ │      1     │     2     │→ │  2 │ React    │
  └────┴──────┘        │      2     │     1     │  └────┴──────────┘
                       └────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// OneToMany + ManyToOne — User aur Posts

// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Post, (post) => post.author, {
    cascade: true,    // user delete ho → posts bhi delete
    eager: false,     // default: manual load (performance better)
  })
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;
}

// ─────────────────────────────────────
// src/posts/post.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ default: false })
  published: boolean;

  // ManyToOne — bahut saare posts ek user ke
  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE',  // user delete → posts delete
  })
  @JoinColumn({ name: 'user_id' })  // foreign key column name
  author: User;

  @Column({ name: 'user_id' })
  userId: number;
}`,
        language: "typescript",
      },
      {
        heading: "ManyToMany Relations — Junction Table",
        content: `ManyToMany ke liye TypeORM automatically junction table banata hai. Tum apna bhi bana sakte ho extra fields ke liye.`,
        code: `// Student ↔ Course ManyToMany

// src/students/student.entity.ts
@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.students, {
    cascade: true,
  })
  @JoinTable({  // sirf ek side pe @JoinTable lagao
    name: 'student_courses',   // junction table name
    joinColumn: { name: 'student_id' },
    inverseJoinColumn: { name: 'course_id' },
  })
  courses: Course[];
}

// src/courses/course.entity.ts
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}

// ─────────────────────────────────────
// Service mein relations ke saath queries

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  // User ke saath post create karo
  async create(userId: number, dto: CreatePostDto): Promise<Post> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User nahi mila');
    
    const post = this.postRepo.create({ ...dto, author: user });
    return this.postRepo.save(post);
  }

  // Posts with author — relations load karo
  async findAll(): Promise<Post[]> {
    return this.postRepo.find({
      relations: ['author'],     // JOIN karo
      where: { published: true },
      order: { id: 'DESC' },
    });
  }

  // QueryBuilder se complex relations
  async findWithStats(): Promise<Post[]> {
    return this.postRepo
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'user')   // JOIN + SELECT
      .leftJoinAndSelect('post.comments', 'comment')
      .where('post.published = :published', { published: true })
      .orderBy('post.createdAt', 'DESC')
      .take(10)
      .getMany();
  }

  // Student ko course add karo (ManyToMany)
  async enrollStudent(studentId: number, courseId: number) {
    const student = await this.studentRepo.findOne({
      where: { id: studentId },
      relations: ['courses'],
    });
    const course = await this.courseRepo.findOne({ where: { id: courseId } });
    
    student.courses.push(course);
    return this.studentRepo.save(student);
  }
}`,
        language: "typescript",
        tip: "eager: true use karne se relations automatically load hoti hain — lekin yeh performance hit kar sakta hai. Default false rakho aur zaroori hone par relations: ['author'] specify karo.",
        warning: "N+1 Query Problem: Loop mein har post ke liye alag user query mat karo. relations: ['author'] ya QueryBuilder se single JOIN query use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "What are Relations? — Real-world examples",
        content: `In databases, tables are connected to each other. TypeORM makes it easy to define these connections in TypeScript.

**Relation Types:**
- **OneToOne** — One user has one profile (1:1)
- **OneToMany / ManyToOne** — One user has many posts (1:N)
- **ManyToMany** — A student has many courses, a course has many students (N:N)`,
        diagram: `
DATABASE RELATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OneToMany (User → Posts):
  users table          posts table
  ┌────┬──────┐        ┌────┬─────────┬─────────┐
  │ id │ name │        │ id │ title   │ user_id │
  ├────┼──────┤        ├────┼─────────┼─────────┤
  │  1 │ Rahul│←──┐    │  1 │ Post A  │    1    │
  │  2 │ Priya│   └───→│  2 │ Post B  │    1    │
  └────┴──────┘        │  3 │ Post C  │    2    │
                       └────┴─────────┴─────────┘

ManyToMany (Students ↔ Courses):
  junction table: student_courses
  ┌────────────┬───────────┐
  │ student_id │ course_id │
  ├────────────┼───────────┤
  │     1      │     1     │
  │     1      │     2     │
  └────────────┴───────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// OneToMany + ManyToOne — User and Posts

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;

  @OneToMany(() => Post, (post) => post.author, { cascade: true })
  posts: Post[];
}

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn() id: number;
  @Column() title: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  author: User;
}

// Querying with relations:
async findAllWithAuthor() {
  return this.postRepo.find({
    relations: ['author'],      // performs a JOIN
    where: { published: true },
    order: { id: 'DESC' },
  });
}`,
        language: "typescript",
        tip: "Keep eager: false (the default). Load relations explicitly with relations: ['author'] only when needed. This avoids slow queries.",
        warning: "N+1 Problem: Don't query the author inside a loop for each post. Use relations: ['author'] or QueryBuilder to load everything in a single JOIN query.",
      },
    ],
    mcqs: [
      {
        q: "ManyToMany relation mein @JoinTable() kahan lagta hai?",
        options: [
          "Dono entities pe",
          "Sirf ek side (owning side) pe",
          "Junction table pe",
          "Kisi pe nahi",
        ],
        correct: 1,
        explain: "@JoinTable() sirf owning side pe lagta hai. Agar Student ↔ Course hai, toh Student entity pe lagao (jo enroll karta hai).",
      },
      {
        q: "N+1 query problem kab hoti hai?",
        options: [
          "Jab bahut saare records delete karo",
          "Jab loop mein har item ke liye alag database query karo",
          "Jab relations define na karo",
          "Jab eager: true use karo",
        ],
        correct: 1,
        explain: "N+1 problem: 1 query posts laati hai, phir N queries har post ke author ke liye. relations: ['author'] use karo — single JOIN query.",
      },
    ],
    mcqsEn: [
      {
        q: "In a ManyToMany relation, where does @JoinTable() go?",
        options: [
          "On both entities",
          "Only on the owning side (one entity)",
          "On the junction table",
          "Nowhere — it's automatic",
        ],
        correct: 1,
        explain: "@JoinTable() only goes on the owning side of the relation. For Student ↔ Course, put it on Student (the one that enrolls).",
      },
    ],
    cheatsheet: [
      "@OneToMany(() => Post, post => post.author) — one user, many posts",
      "@ManyToOne(() => User, user => user.posts) — many posts, one user",
      "@ManyToMany + @JoinTable — N:N relation",
      "@OneToOne + @JoinColumn — 1:1 relation",
      "relations: ['author'] — load relation (JOIN)",
      "cascade: true — related entity bhi save/delete karo",
      "onDelete: 'CASCADE' — parent delete → children delete",
      "eager: false — manually load karo (default, better performance)",
    ],
    cheatsheetEn: [
      "@OneToMany(() => Post, post => post.author) — one user, many posts",
      "@ManyToOne(() => User, user => user.posts) — many posts, one user",
      "@ManyToMany + @JoinTable — N:N junction table",
      "relations: ['author'] — eager load in query (JOIN)",
      "cascade: true — auto-save/delete related entities",
      "onDelete: 'CASCADE' — delete children when parent is deleted",
    ],
    revision: [
      "OneToMany = parent side (@OneToMany), ManyToOne = child side (@ManyToOne)",
      "@JoinTable = ManyToMany junction table, sirf owning side pe",
      "relations: ['x'] = JOIN query, loop mein mat karo (N+1 problem)",
      "cascade: true = parent save/delete karne par child bhi",
    ],
    revisionEn: [
      "OneToMany = parent side, ManyToOne = child side (foreign key here)",
      "@JoinTable = creates junction table for ManyToMany, only on owning side",
      "relations: ['x'] = JOIN query, never load inside a loop (N+1 problem)",
      "cascade: true = saving/deleting parent also affects children",
    ],
  },

  {
    id: "typeorm-migrations",
    title: "TypeORM Migrations — Database Changes Safely",
    titleEn: "TypeORM Migrations — Safe Database Schema Changes",
    emoji: "🗄️",
    category: "Advanced",
    description: "Production mein database schema safely change karo migrations ke saath",
    descriptionEn: "Safely change your database schema in production using TypeORM migrations",
    sections: [
      {
        heading: "Migration kyun zaroori hai?",
        content: `**synchronize: true** development mein chalti hai — yeh entities ke basis par automatically schema change karta hai. Lekin production mein yeh DANGEROUS hai kyunki:
- Columns drop ho sakte hain → data loss
- Tables rename ho sakte hain unexpectedly
- Koi rollback mechanism nahi

**Migration = Safe alternative:**
- Har schema change ek versioned SQL file mein hoti hai
- History milti hai (kya change hua, kab)
- Rollback kar sakte ho (up/down)
- Team mein saare log same schema pe hote hain`,
        code: `# ─────────────────────────────────────
# Step 1: datasource.ts file banao

# src/database/datasource.ts
import { DataSource } from 'typeorm';
import { User } from '../users/user.entity';
import { Post } from '../posts/post.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'secret',
  database: process.env.DB_NAME || 'myapp',
  entities: [User, Post],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,  // ALWAYS false for migrations
});

# ─────────────────────────────────────
# package.json scripts add karo
{
  "scripts": {
    "migration:generate": "typeorm-ts-node-commonjs migration:generate -d src/database/datasource.ts",
    "migration:run": "typeorm-ts-node-commonjs migration:run -d src/database/datasource.ts",
    "migration:revert": "typeorm-ts-node-commonjs migration:revert -d src/database/datasource.ts",
    "migration:create": "typeorm-ts-node-commonjs migration:create"
  }
}

# ─────────────────────────────────────
# Step 2: Migration generate karo (entity change ke baad)
npm run migration:generate -- src/database/migrations/AddUserAgeColumn

# Step 3: Migration run karo
npm run migration:run

# Step 4: Agar galti ho — revert karo
npm run migration:revert`,
        language: "bash",
      },
      {
        heading: "Manual Migration — Custom SQL likhna",
        content: `Generated migrations ke alawa custom migrations bhi likh sakte ho — data migration, seeding ke liye.`,
        code: `// src/database/migrations/1700000000000-AddUserAgeColumn.ts
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserAgeColumn1700000000000 implements MigrationInterface {
  name = 'AddUserAgeColumn1700000000000';

  // migration apply karo
  async up(queryRunner: QueryRunner): Promise<void> {
    // Naya column add karo
    await queryRunner.addColumn('users',
      new TableColumn({
        name: 'age',
        type: 'integer',
        isNullable: true,      // existing records ke liye null allow
        default: null,
      })
    );

    // Data migrate karo (agar zaroorat ho)
    await queryRunner.query(\`
      UPDATE users SET age = 25 WHERE age IS NULL
    \`);

    // Index add karo
    await queryRunner.createIndex('users', {
      name: 'IDX_USER_AGE',
      columnNames: ['age'],
    } as any);
  }

  // migration rollback karo
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('users', 'IDX_USER_AGE');
    await queryRunner.dropColumn('users', 'age');
  }
}

// ─────────────────────────────────────
// Seeding — initial/test data add karo
// src/database/seeds/user.seeder.ts
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';

export async function seedUsers(dataSource: DataSource) {
  const userRepo = dataSource.getRepository('users');
  
  const adminExists = await userRepo.findOne({ where: { email: 'admin@example.com' } });
  if (adminExists) return; // Already seeded
  
  await userRepo.save([
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: await bcrypt.hash('Admin@123', 10),
      role: 'admin',
    },
    {
      name: 'Test User',
      email: 'test@example.com',
      password: await bcrypt.hash('Test@123', 10),
      role: 'user',
    },
  ]);
  
  console.log('Users seeded!');
}`,
        language: "typescript",
        tip: "Har migration mein up() aur down() dono likho. down() rollback ke liye zaroori hai production mein deploy issue hone par.",
        warning: "Migration files git mein commit karo. Kabhi bhi generated migration file manually edit mat karo — naya migration banao.",
      },
    ],
    sectionsEn: [
      {
        heading: "Why are Migrations necessary?",
        content: `**synchronize: true** works in development — it automatically updates the database schema based on your entities. But in production it is DANGEROUS because:
- Columns can be dropped → data loss
- Tables can be renamed unexpectedly
- There is no rollback mechanism

**Migrations = The safe alternative:**
- Every schema change lives in a versioned SQL file
- Full history of what changed and when
- Rollback support (up/down methods)
- Everyone on the team stays on the same schema`,
        code: `# Step 1: Create datasource.ts for the TypeORM CLI

# src/database/datasource.ts
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,  // ALWAYS false when using migrations
});

# package.json scripts:
"migration:generate": "typeorm-ts-node-commonjs migration:generate -d src/database/datasource.ts",
"migration:run":      "typeorm-ts-node-commonjs migration:run -d src/database/datasource.ts",
"migration:revert":   "typeorm-ts-node-commonjs migration:revert -d src/database/datasource.ts"

# Generate after changing an entity:
npm run migration:generate -- src/database/migrations/AddAgeToUser

# Apply pending migrations:
npm run migration:run

# Rollback the last migration:
npm run migration:revert`,
        language: "bash",
        tip: "Always commit migration files to git. Never manually edit a generated migration file — create a new migration instead.",
        warning: "Set synchronize: false as soon as you start using migrations. Mixing synchronize: true with migrations will cause conflicts.",
      },
    ],
    mcqs: [
      {
        q: "Production mein synchronize: true kyun dangerous hai?",
        options: [
          "Slow hai",
          "Columns drop kar sakta hai → data loss",
          "Sirf SQLite support karta hai",
          "Migration files delete karta hai",
        ],
        correct: 1,
        explain: "synchronize: true entity changes automatically apply karta hai — columns drop ho sakte hain, rename ho sakte hain. No rollback. Production mein hamesha false.",
      },
      {
        q: "Migration mein down() method kyun likhte hain?",
        options: [
          "Required hai, bina iske error aata hai",
          "Rollback ke liye — migration undo kar sako",
          "Database backup ke liye",
          "Seeding ke liye",
        ],
        correct: 1,
        explain: "down() rollback method hai. Jab migration:revert chalate ho, yeh method run hota hai jo up() ke changes undo karta hai.",
      },
    ],
    mcqsEn: [
      {
        q: "Why is synchronize: true dangerous in production?",
        options: [
          "It is slow",
          "It can drop columns automatically → data loss",
          "It only supports SQLite",
          "It deletes migration files",
        ],
        correct: 1,
        explain: "synchronize: true applies all entity changes automatically — it can drop or rename columns with no rollback. Always set false in production.",
      },
    ],
    cheatsheet: [
      "migration:generate — entity changes se migration file banao",
      "migration:run — pending migrations apply karo",
      "migration:revert — last migration rollback karo",
      "up() — schema change karo",
      "down() — schema rollback karo",
      "synchronize: false — production mein zaroori",
      "queryRunner.addColumn() — column add karo",
      "queryRunner.dropColumn() — column remove karo",
    ],
    cheatsheetEn: [
      "migration:generate — auto-generate migration from entity diff",
      "migration:run — apply all pending migrations",
      "migration:revert — rollback the last applied migration",
      "up() — apply schema change",
      "down() — reverse/rollback the schema change",
      "synchronize: false — always required in production",
    ],
    revision: [
      "Migration = versioned SQL change file with rollback support",
      "synchronize: false = production ka golden rule",
      "up() = change apply, down() = change rollback",
      "Migration files git mein commit karo",
    ],
    revisionEn: [
      "Migration = a versioned, trackable schema change file",
      "synchronize: false = production golden rule",
      "up() = apply change, down() = rollback change",
      "Always commit migration files to version control",
    ],
  },

  {
    id: "file-upload",
    title: "File Upload — Multer ke saath",
    titleEn: "File Upload — Handling Files with Multer",
    emoji: "📁",
    category: "Advanced",
    description: "Images aur files upload karo, validate karo, aur store karo — local aur cloud storage",
    descriptionEn: "Upload, validate, and store images and files — local disk and cloud storage",
    sections: [
      {
        heading: "File Upload Setup — Multer with NestJS",
        content: `NestJS file upload ke liye **Multer** use karta hai (Express ke andar built-in hai). @nestjs/platform-express install hona chahiye.`,
        code: `# Dependencies install karo
npm install @nestjs/platform-express
npm install -D @types/multer

# ─────────────────────────────────────
# Single file upload
# src/uploads/uploads.controller.ts
import {
  Controller, Post, UseInterceptors,
  UploadedFile, UploadedFiles, Body,
  ParseFilePipe, MaxFileSizeValidator, FileTypeValidator,
  BadRequestException
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

// Helper: file storage configure karo
const storage = diskStorage({
  destination: './uploads',   // yahan save karo
  filename: (req, file, cb) => {
    const uniqueName = \`\${uuid()}\${extname(file.originalname)}\`;
    cb(null, uniqueName);
  },
});

// File filter
const imageFileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
    return cb(new BadRequestException('Sirf images allowed hain!'), false);
  }
  cb(null, true);
};

@Controller('uploads')
export class UploadsController {
  // Single file — POST /uploads/image
  @Post('image')
  @UseInterceptors(FileInterceptor('file', {
    storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  }))
  uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5_000_000 }), // 5MB
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
      })
    )
    file: Express.Multer.File,
  ) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      url: \`/uploads/\${file.filename}\`,
    };
  }

  // Multiple files — POST /uploads/gallery
  @Post('gallery')
  @UseInterceptors(FilesInterceptor('files', 10, { storage })) // max 10 files
  uploadGallery(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map((f) => ({ filename: f.filename, size: f.size }));
  }

  // Multiple different fields
  @Post('profile')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ], { storage }))
  uploadProfile(
    @UploadedFiles() files: { avatar?: Express.Multer.File[]; cover?: Express.Multer.File[] },
    @Body() dto: UpdateProfileDto,
  ) {
    return {
      avatar: files.avatar?.[0]?.filename,
      cover: files.cover?.[0]?.filename,
    };
  }
}`,
        language: "typescript",
        tip: "uuid() se unique filename generate karo — same name ki files overwrite na hon. extname() original extension preserve karta hai.",
      },
      {
        heading: "Static Files Serve Karo + File Cleanup",
        content: `Upload ki gayi files ko serve karo aur purani files delete karo:`,
        code: `// main.ts — static files serve karo
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // /uploads folder ko public banao
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',  // URL: http://localhost:3000/uploads/filename.jpg
  });
  
  await app.listen(3000);
}

// ─────────────────────────────────────
// Service mein file handle karo
import { Injectable } from '@nestjs/common';
import { unlink } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class UploadsService {
  async deleteFile(filename: string): Promise<void> {
    try {
      await unlink(join('./uploads', filename));
    } catch (err) {
      // File already deleted ho ya exist na kare
      console.warn(\`Could not delete file: \${filename}\`);
    }
  }

  async updateAvatar(userId: number, filename: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    
    // Purana avatar delete karo
    if (user.avatar) {
      await this.deleteFile(user.avatar);
    }
    
    // Naya avatar save karo
    user.avatar = filename;
    return this.userRepo.save(user);
  }
}`,
        language: "typescript",
        warning: "Production mein local disk pe mat rakho — server restart par sab delete ho jayega. AWS S3, Cloudinary ya koi cloud storage use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "File Upload Setup — Multer with NestJS",
        content: `NestJS uses **Multer** (built into Express) for file uploads. You need @nestjs/platform-express installed.`,
        code: `# Install dependencies
npm install @nestjs/platform-express
npm install -D @types/multer

# Single file upload example:
@Post('image')
@UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => cb(null, \`\${uuid()}\${extname(file.originalname)}\`),
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
}))
uploadImage(
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 5_000_000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
      ],
    })
  )
  file: Express.Multer.File,
) {
  return { url: \`/uploads/\${file.filename}\`, size: file.size };
}`,
        language: "typescript",
        tip: "Use uuid() to generate unique filenames — this prevents files with the same name from overwriting each other.",
        warning: "Never store uploaded files on local disk in production — they will be lost on server restarts. Use AWS S3, Cloudinary, or another cloud storage service.",
      },
    ],
    mcqs: [
      {
        q: "FileInterceptor mein 'file' argument kya hai?",
        options: [
          "File ka naam",
          "Form field ka naam (multipart/form-data mein)",
          "Storage folder",
          "File type",
        ],
        correct: 1,
        explain: "FileInterceptor('file') mein 'file' multipart form field name hai. Frontend mein FormData.append('file', blob) likha hoga.",
      },
      {
        q: "Production mein files kahan store karne chahiye?",
        options: [
          "Server ki local disk pe",
          "Database mein BLOB",
          "Cloud storage (S3, Cloudinary)",
          "Cookie mein",
        ],
        correct: 2,
        explain: "Production mein AWS S3 ya Cloudinary jaisi cloud storage services use karo. Local disk unreliable hai — server restart ya scale hone par files kho jaati hain.",
      },
    ],
    mcqsEn: [
      {
        q: "What does the 'file' argument in FileInterceptor('file') refer to?",
        options: [
          "The filename on disk",
          "The multipart form field name",
          "The storage directory",
          "The file type",
        ],
        correct: 1,
        explain: "'file' is the multipart form-data field name. The frontend must use FormData.append('file', blob) to match this field name.",
      },
    ],
    cheatsheet: [
      "FileInterceptor('field') — single file upload",
      "FilesInterceptor('field', 10) — multiple files (max 10)",
      "FileFieldsInterceptor([{name, maxCount}]) — named fields",
      "@UploadedFile() — single file inject karo",
      "@UploadedFiles() — multiple files inject karo",
      "diskStorage({ destination, filename }) — disk pe save",
      "MaxFileSizeValidator — size limit check",
      "FileTypeValidator — MIME type check",
    ],
    cheatsheetEn: [
      "FileInterceptor('field') — upload a single file",
      "FilesInterceptor('field', 10) — upload multiple files",
      "@UploadedFile() — inject the uploaded file",
      "@UploadedFiles() — inject multiple uploaded files",
      "diskStorage({ destination, filename }) — save to local disk",
      "MaxFileSizeValidator — enforce size limit",
      "FileTypeValidator — validate MIME type",
    ],
    revision: [
      "FileInterceptor = field name jo frontend bhej rha hai",
      "uuid() = unique filename, extname() = original extension",
      "ParseFilePipe = size + type validation",
      "Production = cloud storage (S3/Cloudinary), local nahi",
    ],
    revisionEn: [
      "FileInterceptor = matches the form field name from frontend",
      "uuid() = unique filename, extname() = preserve original extension",
      "ParseFilePipe validators = size and type validation",
      "Production = use cloud storage (S3/Cloudinary), never local disk",
    ],
  },

  {
    id: "queues",
    title: "Queues & Background Jobs — BullMQ",
    titleEn: "Queues & Background Jobs — BullMQ",
    emoji: "📬",
    category: "Advanced",
    description: "Heavy tasks (email, image processing) background mein karo — BullMQ ke saath",
    descriptionEn: "Run heavy tasks (email, image processing) in the background using BullMQ",
    sections: [
      {
        heading: "Queue kyun chahiye?",
        content: `Kuch kaam slow hote hain — email bhejna, PDF banana, image resize karna. Agar yeh sab request ke andar karo, user ko wait karna padega.

**Queue ka fayda:**
- Request immediately complete — "Job added" response
- Background mein heavy kaam hota hai
- Retry on failure — agar kaam fail ho, automatically retry
- Scale karo — alag servers pe workers chalao
- Rate limiting — 100 emails/minute max`,
        diagram: `
QUEUE ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Client                 App Server
    │  POST /orders/place    │
    │ ──────────────────────►│
    │                        │  1. DB mein order save
    │                        │  2. Queue mein job add
    │  { orderId: 42 }       │
    │ ◄──────────────────────│  ← Fast response!
    │                        │
    │                   Redis Queue
    │                  ┌──────────────┐
    │                  │ send-email   │
    │                  │ send-sms     │
    │                  │ update-stock │
    │                  └──────┬───────┘
    │                         │
    │                   Worker Process
    │                  ┌──────────────┐
    │                  │ Job process  │
    │                  │ Email bhej   │
    │                  │ SMS bhej     │
    │                  └──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install karo
npm install @nestjs/bullmq bullmq
npm install ioredis  # Redis client

# Redis bhi chahiye (local ya cloud)
# docker run -d -p 6379:6379 redis

# ─────────────────────────────────────
# app.module.ts
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
      },
    }),
    BullModule.registerQueue(
      { name: 'email' },    // email queue
      { name: 'orders' },   // orders queue
    ),
  ],
})
export class AppModule {}`,
        language: "typescript",
      },
      {
        heading: "Producer — Queue mein job add karo",
        content: `Producer job queue mein dalta hai. Service injection se queue use karo:`,
        code: `// src/orders/orders.service.ts — Producer
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class OrdersService {
  constructor(
    @InjectQueue('email') private emailQueue: Queue,
    @InjectQueue('orders') private ordersQueue: Queue,
  ) {}

  async placeOrder(userId: number, items: any[]) {
    // 1. Database mein save karo
    const order = await this.orderRepo.save({ userId, items, status: 'pending' });

    // 2. Queue mein jobs add karo (background mein chalenge)
    await this.emailQueue.add('order-confirmation', {
      to: 'user@example.com',
      orderId: order.id,
      items: order.items,
    }, {
      attempts: 3,           // 3 baar try karo agar fail ho
      backoff: { type: 'exponential', delay: 1000 }, // 1s, 2s, 4s
      removeOnComplete: true, // complete hone par queue se hata do
      priority: 10,           // high priority (lower = higher)
    });

    await this.ordersQueue.add('process-payment', {
      orderId: order.id,
      amount: this.calculateTotal(items),
    }, {
      delay: 5000, // 5 seconds baad process karo
    });

    // Fast response — background mein hoga sab
    return { orderId: order.id, status: 'Order placed!' };
  }
}`,
        language: "typescript",
      },
      {
        heading: "Consumer (Processor) — Job process karo",
        content: `Processor background mein queue se jobs uthata hai aur process karta hai:`,
        code: `// src/email/email.processor.ts — Consumer
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Logger } from '@nestjs/common';

@Processor('email')  // 'email' queue listen karo
export class EmailProcessor extends WorkerHost {
  private readonly logger = new Logger(EmailProcessor.name);

  async process(job: Job): Promise<any> {
    this.logger.log(\`Processing job: \${job.name} [ID: \${job.id}]\`);

    switch (job.name) {
      case 'order-confirmation':
        return this.sendOrderConfirmation(job.data);
      case 'welcome-email':
        return this.sendWelcomeEmail(job.data);
      case 'password-reset':
        return this.sendPasswordReset(job.data);
      default:
        throw new Error(\`Unknown job: \${job.name}\`);
    }
  }

  private async sendOrderConfirmation(data: any) {
    // Email service call karo (nodemailer, sendgrid, etc.)
    this.logger.log(\`Sending order confirmation to \${data.to}\`);
    // await this.emailService.send({ ... });
    return { sent: true, to: data.to };
  }

  private async sendWelcomeEmail(data: any) {
    this.logger.log(\`Sending welcome email to \${data.email}\`);
    return { sent: true };
  }

  private async sendPasswordReset(data: any) {
    this.logger.log(\`Sending password reset to \${data.email}\`);
    return { sent: true };
  }
}

// ─────────────────────────────────────
// email.module.ts
@Module({
  imports: [BullModule.registerQueue({ name: 'email' })],
  providers: [EmailProcessor, EmailService],
})
export class EmailModule {}`,
        language: "typescript",
        tip: "Processor ko same module mein register karo jahan queue register hai. attempts: 3 se automatic retry hoti hai agar job fail ho.",
      },
    ],
    sectionsEn: [
      {
        heading: "Why do you need a Queue?",
        content: `Some tasks are slow — sending emails, generating PDFs, resizing images. If you do these synchronously inside a request, the user has to wait.

**Benefits of a Queue:**
- Request completes immediately — return "Job added" to the user
- Heavy work happens in the background asynchronously
- Retry on failure — if a job fails, it retries automatically
- Scale independently — run workers on separate servers
- Rate limiting — e.g., max 100 emails per minute`,
        diagram: `
QUEUE ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Client              App Server
    │  POST /orders      │
    │ ──────────────────►│
    │                    │  1. Save order to DB
    │                    │  2. Add job to Queue
    │  { orderId: 42 }   │
    │ ◄──────────────────│  ← Immediate fast response!
    │                    │
    │                Redis Queue → Worker → Email Sent
    │                             └──────→ SMS Sent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install dependencies
npm install @nestjs/bullmq bullmq ioredis

# You also need Redis running:
# docker run -d -p 6379:6379 redis

# Register queues in your module:
BullModule.registerQueue({ name: 'email' }, { name: 'orders' })

# Add a job to the queue (Producer):
await this.emailQueue.add('order-confirmation', { to: user.email }, {
  attempts: 3,                   // retry 3 times on failure
  backoff: { type: 'exponential', delay: 1000 },
});

# Process jobs in the background (Consumer):
@Processor('email')
export class EmailProcessor extends WorkerHost {
  async process(job: Job) {
    if (job.name === 'order-confirmation') {
      await this.sendEmail(job.data);
    }
  }
}`,
        language: "typescript",
        tip: "With attempts: 3 and exponential backoff, if the email service is temporarily down, BullMQ will retry at 1s, 2s, and 4s before marking the job as failed.",
      },
    ],
    mcqs: [
      {
        q: "BullMQ kaunsa database use karta hai internally?",
        options: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
        correct: 2,
        explain: "BullMQ Redis use karta hai queue store karne ke liye. Redis fast in-memory store hai jo queues ke liye perfect hai.",
      },
      {
        q: "Queue mein job add karna zyada ache kyun hai synchronous operation se?",
        options: [
          "Job faster complete hoti hai",
          "User ko wait nahi karna padta, background mein hota hai",
          "Database calls nahi hoti",
          "Error nahi aate",
        ],
        correct: 1,
        explain: "Queue se immediate response milta hai. Heavy kaam (email, PDF) background mein hota hai. User fast experience paata hai.",
      },
    ],
    mcqsEn: [
      {
        q: "Which database does BullMQ use internally?",
        options: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
        correct: 2,
        explain: "BullMQ uses Redis to store and manage the queue. Redis is a fast in-memory data store, perfect for job queues.",
      },
    ],
    cheatsheet: [
      "@InjectQueue('name') — queue inject karo",
      "queue.add('job-name', data, options) — job add karo",
      "@Processor('queue-name') — consumer class",
      "job.name — job ka naam",
      "job.data — job ka data",
      "attempts: 3 — 3 baar retry karo",
      "delay: 5000 — 5 seconds baad run karo",
      "backoff: { type: 'exponential' } — retry delay badhao",
    ],
    cheatsheetEn: [
      "@InjectQueue('name') — inject the queue",
      "queue.add('job-name', data, options) — add a job",
      "@Processor('queue-name') — marks the consumer class",
      "job.name — name of the job",
      "job.data — payload passed when adding the job",
      "attempts: 3 — retry up to 3 times on failure",
      "delay: 5000 — wait 5 seconds before starting",
      "backoff: { type: 'exponential' } — increasing retry delay",
    ],
    revision: [
      "Queue = background job system (email, PDF, notifications)",
      "Producer = job add karo, Consumer = job process karo",
      "BullMQ = Redis-backed, reliable, retry support",
      "attempts + backoff = automatic retry with delay",
    ],
    revisionEn: [
      "Queue = background job system for slow tasks",
      "Producer = adds jobs to queue, Consumer = processes jobs",
      "BullMQ is Redis-backed with built-in retry support",
      "attempts + backoff = automatic retry with increasing delays",
    ],
  },

  {
    id: "websockets",
    title: "WebSockets — Real-time Communication",
    titleEn: "WebSockets — Real-time Communication",
    emoji: "⚡",
    category: "Advanced",
    description: "Socket.IO ke saath real-time chat, notifications aur live updates banao",
    descriptionEn: "Build real-time chat, notifications and live updates with Socket.IO",
    sections: [
      {
        heading: "WebSocket kya hai? HTTP se kya fark?",
        content: `**HTTP:** Ek taraf connection — Client request karta hai, server respond karta hai, connection band.

**WebSocket:** Dono taraf connection — ek baar connect hone ke baad dono same permanent connection pe communicate karte hain.

**Real-world uses:**
- **Chat application** — messages real-time mein aate hain
- **Live notifications** — order update, payment success instantly
- **Live dashboard** — stock prices, sports scores real-time
- **Collaborative tools** — Google Docs jaisa real-time editing
- **Online games** — multiplayer position updates`,
        diagram: `
HTTP vs WebSocket:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTTP (Request-Response):
  Client          Server
    │── Request ──►│
    │◄── Response ─│
    │   [CLOSED]   │  ← Har request new connection

WebSocket (Persistent):
  Client          Server
    │── Connect ──►│
    │◄─ Connected ─│
    │              │ ← Connection open rahti hai
    │── message ──►│
    │◄── message ──│
    │── message ──►│
    │◄── broadcast ┤ → sab connected clients ko
    │   [OPEN...]  │

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install karo
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

# ─────────────────────────────────────
# src/chat/chat.gateway.ts — WebSocket Gateway
import {
  WebSocketGateway, WebSocketServer,
  SubscribeMessage, MessageBody, ConnectedSocket,
  OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',    // production mein specific origin do
  },
  namespace: '/chat',   // optional: /chat namespace
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(ChatGateway.name);
  
  // Connected users store karo
  private users = new Map<string, { id: string; name: string; room: string }>();

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(\`Client connected: \${client.id}\`);
  }

  handleDisconnect(client: Socket) {
    const user = this.users.get(client.id);
    if (user) {
      // Room ke baaki logon ko batao
      this.server.to(user.room).emit('user-left', {
        userId: client.id,
        name: user.name,
        timestamp: new Date().toISOString(),
      });
      this.users.delete(client.id);
    }
    this.logger.log(\`Client disconnected: \${client.id}\`);
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { room: string; name: string },
  ) {
    // Room mein join karo
    client.join(data.room);
    this.users.set(client.id, { id: client.id, name: data.name, room: data.room });
    
    // Room ke baaki logon ko batao
    client.to(data.room).emit('user-joined', {
      userId: client.id,
      name: data.name,
    });
    
    return { event: 'joined', room: data.room };
  }

  @SubscribeMessage('send-message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { message: string; room: string },
  ) {
    const user = this.users.get(client.id);
    
    const messagePayload = {
      id: Date.now().toString(),
      message: data.message,
      sender: { id: client.id, name: user?.name || 'Anonymous' },
      timestamp: new Date().toISOString(),
    };

    // Poore room ko message bhejo (sender ko bhi)
    this.server.to(data.room).emit('new-message', messagePayload);
    
    return messagePayload; // sender ko acknowledgement
  }

  // Kisi bhi jagah se broadcast karo (service mein bhi)
  sendNotification(userId: string, notification: any) {
    this.server.to(userId).emit('notification', notification);
  }
}`,
        language: "typescript",
      },
      {
        heading: "Frontend Client — Socket.IO se connect karo",
        content: `Frontend (React/Vue/Vanilla JS) se WebSocket server se connect karo:`,
        code: `// Frontend mein socket.io-client use karo
// npm install socket.io-client

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/chat', {
  autoConnect: true,
  reconnection: true,        // auto reconnect
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
});

// Connection events
socket.on('connect', () => {
  console.log('Connected! ID:', socket.id);
  
  // Room join karo
  socket.emit('join-room', { room: 'general', name: 'Rahul' });
});

socket.on('disconnect', (reason) => {
  console.log('Disconnected:', reason);
});

// Events listen karo
socket.on('new-message', (data) => {
  console.log('New message:', data);
  // UI update karo
  addMessageToChat(data);
});

socket.on('user-joined', (data) => {
  console.log(\`\${data.name} joined the room!\`);
});

socket.on('notification', (data) => {
  showNotification(data);
});

// Message bhejo
function sendMessage(message: string, room: string) {
  socket.emit('send-message', { message, room }, (ack) => {
    // Server ka acknowledgement
    console.log('Message sent, ID:', ack.id);
  });
}`,
        language: "typescript",
        tip: "@WebSocketServer() se Server object milta hai — kisi bhi service mein inject karke broadcast kar sakte ho, sirf Gateway ke andar nahi.",
      },
    ],
    sectionsEn: [
      {
        heading: "WebSocket vs HTTP — What's the difference?",
        content: `**HTTP:** One-way connection per request — client requests, server responds, connection closes.

**WebSocket:** Persistent two-way connection — once connected, both server and client can send messages at any time.

**Real-world uses:**
- **Chat apps** — messages arrive in real-time
- **Live notifications** — instant order updates, payment success
- **Live dashboards** — stock prices, sports scores updating live
- **Collaborative tools** — Google Docs-style real-time editing
- **Online games** — multiplayer position sync`,
        diagram: `
HTTP vs WebSocket:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTTP (Request-Response):
  Client          Server
    │── Request ──►│
    │◄── Response ─│
    │   [CLOSED]   │  ← New connection each request

WebSocket (Persistent):
  Client          Server
    │── Connect ──►│
    │◄─ Connected ─│
    │              │ ← Connection stays OPEN
    │── message ──►│
    │◄── message ──│
    │◄── broadcast ┤ → to all connected clients

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install dependencies
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

# Basic Gateway:
@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('send-message')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    // Broadcast to all clients in room
    this.server.to(data.room).emit('new-message', {
      sender: client.id,
      message: data.message,
      timestamp: new Date().toISOString(),
    });
  }
}

# Frontend:
const socket = io('http://localhost:3000');
socket.emit('send-message', { room: 'general', message: 'Hello!' });
socket.on('new-message', (data) => console.log(data));`,
        language: "typescript",
        tip: "@WebSocketServer() gives you the Socket.IO Server instance — you can inject the Gateway anywhere to broadcast from services too.",
      },
    ],
    mcqs: [
      {
        q: "@WebSocketGateway decorator kya define karta hai?",
        options: [
          "HTTP REST endpoint",
          "WebSocket connection handler",
          "Database connection",
          "Background job",
        ],
        correct: 1,
        explain: "@WebSocketGateway class ko WebSocket connection handler banata hai. Yeh Socket.IO server initialize karta hai.",
      },
      {
        q: "this.server.to(room).emit() kya karta hai?",
        options: [
          "Sirf server ko message bhejta hai",
          "Ek specific client ko bhejta hai",
          "Specific room ke sab clients ko message broadcast karta hai",
          "Database mein save karta hai",
        ],
        correct: 2,
        explain: "to(room) se specific room filter hota hai aur emit() sab connected clients mein broadcast karta hai jo us room mein hain.",
      },
    ],
    mcqsEn: [
      {
        q: "What does this.server.to(room).emit() do?",
        options: [
          "Sends to the server only",
          "Sends to one specific client",
          "Broadcasts to all clients in that room",
          "Saves to database",
        ],
        correct: 2,
        explain: "to(room) filters to a specific room, and emit() broadcasts the event to all connected clients in that room.",
      },
    ],
    cheatsheet: [
      "@WebSocketGateway(options) — Gateway class define karo",
      "@WebSocketServer() server: Server — server object",
      "@SubscribeMessage('event') — event listener",
      "@ConnectedSocket() — connected socket inject karo",
      "@MessageBody() — received data inject karo",
      "client.join(room) — room mein join karo",
      "server.to(room).emit(event, data) — room broadcast",
      "server.emit(event, data) — all clients broadcast",
    ],
    cheatsheetEn: [
      "@WebSocketGateway(options) — define a Gateway class",
      "@WebSocketServer() server: Server — get server instance",
      "@SubscribeMessage('event') — listen for events",
      "@ConnectedSocket() — inject the client socket",
      "@MessageBody() — inject received data",
      "client.join(room) — add client to a room",
      "server.to(room).emit(event, data) — broadcast to room",
      "server.emit(event, data) — broadcast to all clients",
    ],
    revision: [
      "WebSocket = persistent 2-way connection (HTTP se different)",
      "@WebSocketGateway = Socket.IO server setup",
      "@SubscribeMessage = specific event handle karo",
      "server.to(room).emit = room mein broadcast karo",
    ],
    revisionEn: [
      "WebSocket = persistent bidirectional connection (unlike HTTP)",
      "@WebSocketGateway = sets up the Socket.IO server",
      "@SubscribeMessage = handle a specific named event",
      "server.to(room).emit = broadcast to everyone in a room",
    ],
  },

  {
    id: "rate-limiting",
    title: "Rate Limiting & Security",
    titleEn: "Rate Limiting & API Security",
    emoji: "🛡️",
    category: "Advanced",
    description: "API abuse rok, rate limiting lagao, aur OWASP security best practices follow karo",
    descriptionEn: "Prevent API abuse with rate limiting and follow OWASP security best practices",
    sections: [
      {
        heading: "Rate Limiting — Too Many Requests rok",
        content: `Rate limiting ek security measure hai jo ek IP se bahut zyada requests aane par rok lagata hai. Brute force attacks aur API abuse rokne ke liye zaroori hai.`,
        code: `# Install karo
npm install @nestjs/throttler

# ─────────────────────────────────────
# app.module.ts
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',       // burst — 10 requests/1 second
        ttl: 1000,
        limit: 10,
      },
      {
        name: 'medium',      // 100 requests/1 minute
        ttl: 60000,
        limit: 100,
      },
      {
        name: 'long',        // 1000 requests/1 hour  
        ttl: 3600000,
        limit: 1000,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, // globally har route pe
    },
  ],
})
export class AppModule {}

// ─────────────────────────────────────
// Specific routes pe custom limits
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  // Login pe strict limit — brute force rok
  @Throttle({ short: { ttl: 60000, limit: 5 } }) // 5 attempts/minute
  @Post('login')
  login(@Body() dto: LoginDto) {}

  // Public endpoint — rate limiting skip karo
  @SkipThrottle()
  @Get('health')
  health() { return 'ok'; }
}`,
        language: "typescript",
      },
      {
        heading: "Security Best Practices — Helmet, CORS, Validation",
        content: `Rate limiting ke alawa aur bhi security measures lagao:`,
        code: `# Install security packages
npm install helmet compression @nestjs/config

# ─────────────────────────────────────
# main.ts — complete security setup
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  // 1. Helmet — HTTP security headers
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
      },
    },
  }));

  // 2. CORS — Allowed origins
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });

  // 3. Compression — Response size kam karo
  app.use(compression());

  // 4. Validation — Input sanitize karo
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    disableErrorMessages: process.env.NODE_ENV === 'production',
  }));

  // 5. Global prefix
  app.setGlobalPrefix('api/v1');

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(\`Server running on port \${port}\`, 'Bootstrap');
}

// ─────────────────────────────────────
// JWT Security — Strong secrets
// .env
JWT_SECRET=your-super-secret-min-32-chars-random-string
JWT_EXPIRY=15m          // short expiry for access tokens
JWT_REFRESH_SECRET=another-random-secret
JWT_REFRESH_EXPIRY=7d   // longer for refresh tokens

// Password hashing strength
const BCRYPT_ROUNDS = 12; // default 10, 12 more secure (but slower)`,
        language: "typescript",
        tip: "CORS mein '*' mat use karo production mein. Specific frontend URL(s) specify karo. '*' se cross-site attacks ka risk hota hai.",
        warning: "JWT secret ko .env mein rakho, code mein hardcode mat karo. Minimum 32 characters ka random string use karo. npm install crypto se generate karo: crypto.randomBytes(64).toString('hex')",
      },
    ],
    sectionsEn: [
      {
        heading: "Rate Limiting — Preventing Too Many Requests",
        content: `Rate limiting is a security measure that blocks an IP address when it sends too many requests in a short period. It's essential for preventing brute force attacks and API abuse.`,
        code: `# Install
npm install @nestjs/throttler

# In AppModule — global rate limiting:
ThrottlerModule.forRoot([
  { name: 'short', ttl: 1000, limit: 10 },     // 10/second
  { name: 'medium', ttl: 60000, limit: 100 },  // 100/minute
])

# Add global guard in providers:
{ provide: APP_GUARD, useClass: ThrottlerGuard }

# Override on specific routes:
@Throttle({ short: { ttl: 60000, limit: 5 } }) // only 5/min on login
@Post('login')
login() {}

@SkipThrottle()   // bypass rate limiting
@Get('health')
health() {}`,
        language: "typescript",
      },
      {
        heading: "Security Best Practices",
        content: `A complete security setup goes beyond rate limiting. Apply these measures in main.ts:`,
        code: `# Install
npm install helmet compression

# main.ts security setup:
app.use(helmet());              // sets 12+ security headers
app.enableCors({
  origin: ['https://myapp.com'],  // never use '*' in production
  credentials: true,
});
app.use(compression());         // gzip responses

app.useGlobalPipes(new ValidationPipe({
  whitelist: true,              // strip unknown fields
  transform: true,              // auto type conversion
  disableErrorMessages: process.env.NODE_ENV === 'production',
}));

# .env — strong secrets:
JWT_SECRET=<64-char-random-hex>
JWT_EXPIRY=15m          # short access token
JWT_REFRESH_EXPIRY=7d   # longer refresh token`,
        language: "typescript",
        tip: "Never use CORS origin: '*' in production. Always specify exact frontend URLs.",
        warning: "Store JWT secrets in .env, never hardcode them. Generate a strong secret: require('crypto').randomBytes(64).toString('hex')",
      },
    ],
    mcqs: [
      {
        q: "Brute force login attacks rokne ke liye best approach?",
        options: [
          "Long passwords require karo",
          "Login route pe strict rate limiting lagao",
          "HTTPS use karo",
          "Database encrypt karo",
        ],
        correct: 1,
        explain: "Login route pe rate limiting (jaise 5 attempts/minute) brute force attacks effectively rokta hai. Other measures bhi zaroori hain lekin rate limiting primary defense hai.",
      },
      {
        q: "Helmet middleware kya karta hai?",
        options: [
          "Password encrypt karta hai",
          "HTTP security headers set karta hai",
          "Rate limiting karta hai",
          "CORS handle karta hai",
        ],
        correct: 1,
        explain: "Helmet various HTTP response headers set karta hai (X-Frame-Options, Content-Security-Policy, etc.) jo common web vulnerabilities se protect karta hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the best approach to prevent brute force login attacks?",
        options: [
          "Require long passwords",
          "Apply strict rate limiting on the login route",
          "Use HTTPS",
          "Encrypt the database",
        ],
        correct: 1,
        explain: "Rate limiting on the login route (e.g., 5 attempts/minute per IP) is the primary and most effective defense against brute force attacks.",
      },
    ],
    cheatsheet: [
      "ThrottlerModule.forRoot([...]) — rate limiting configure karo",
      "APP_GUARD + ThrottlerGuard — globally apply karo",
      "@Throttle({...}) — specific route pe custom limit",
      "@SkipThrottle() — rate limiting bypass karo",
      "helmet() — security headers set karo",
      "enableCors({ origin: ['url'] }) — specific origins allow karo",
      "whitelist: true — extra fields strip karo",
    ],
    cheatsheetEn: [
      "ThrottlerModule.forRoot([...]) — configure rate limits",
      "APP_GUARD + ThrottlerGuard — apply globally",
      "@Throttle({...}) — custom limit for specific route",
      "@SkipThrottle() — bypass rate limiting",
      "helmet() — set HTTP security headers",
      "enableCors({ origin: ['url'] }) — allow specific origins only",
    ],
    revision: [
      "Rate limiting = IP se zyada requests block karo (brute force rok)",
      "Helmet = HTTP security headers automatic set karo",
      "CORS = specific origins allow karo, '*' production mein nahi",
      "ValidationPipe whitelist = extra fields automatically strip karo",
    ],
    revisionEn: [
      "Rate limiting = block IPs that send too many requests",
      "Helmet = automatically sets HTTP security headers",
      "CORS = allow only specific origins, never '*' in production",
      "ValidationPipe whitelist = automatically strip unknown fields",
    ],
  },

  {
    id: "scheduled-tasks",
    title: "Scheduled Tasks — Cron Jobs",
    titleEn: "Scheduled Tasks — Cron Jobs",
    emoji: "⏰",
    category: "Advanced",
    description: "Periodic tasks automatically chalao — cleanup, reports, reminders cron jobs se",
    descriptionEn: "Run periodic tasks automatically — cleanup jobs, reports, reminders using cron",
    sections: [
      {
        heading: "Scheduled Tasks kya hain?",
        content: `Scheduled tasks woh kaam hain jo automatically ek fixed time par ya ek interval ke baad run karte hain.

**Real-world uses:**
- **Database cleanup** — Purani/expired sessions daily delete karo
- **Email reports** — Weekly summary har Monday subah bhejo
- **Subscription check** — Expired subscriptions har ghante verify karo
- **Data sync** — Har 5 minute mein third-party API se data sync karo
- **Cache refresh** — Popular data har 30 minute mein refresh karo`,
        code: `# Install karo
npm install @nestjs/schedule
npm install -D @types/cron

# ─────────────────────────────────────
# app.module.ts
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(), // schedule module register karo
  ],
})
export class AppModule {}

# ─────────────────────────────────────
# src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // Har minute chalao
  @Cron(CronExpression.EVERY_MINUTE)
  handleEveryMinute() {
    this.logger.log('Har minute ka task');
  }

  // Har din subah 8 baje (IST)
  @Cron('0 8 * * *', {
    name: 'morning-report',
    timeZone: 'Asia/Kolkata',
  })
  async sendMorningReport() {
    this.logger.log('Morning report bhej raha hun...');
    await this.emailService.sendDailyReport();
  }

  // Har Sunday raat 2 baje cleanup
  @Cron('0 2 * * 0') // second minute hour day month weekday
  async weeklyCleanup() {
    this.logger.log('Weekly cleanup shuru...');
    const deleted = await this.sessionRepo.delete({ 
      expiresAt: LessThan(new Date()) 
    });
    this.logger.log(\`\${deleted.affected} expired sessions deleted\`);
  }

  // Har 30 second mein (interval)
  @Interval(30000)
  async syncCache() {
    await this.cacheService.refresh();
  }

  // App start hone ke 10 second baad ek baar
  @Timeout(10000)
  handleStartupTask() {
    this.logger.log('App started, initial setup karo');
  }
}

// ─────────────────────────────────────
// Cron Expression Guide:
// ┌──── second (0-59)
// │ ┌──── minute (0-59)
// │ │ ┌──── hour (0-23)
// │ │ │ ┌──── day of month (1-31)
// │ │ │ │ ┌──── month (1-12)
// │ │ │ │ │ ┌──── day of week (0-7, 0 aur 7 = Sunday)
// │ │ │ │ │ │
// * * * * * *

// Examples:
// '0 0 * * *'   = har raat 12 baje
// '0 */6 * * *' = har 6 ghante (12am, 6am, 12pm, 6pm)
// '*/5 * * * *' = har 5 minute
// '0 9-17 * * 1-5' = har weekday 9am-5pm`,
        language: "typescript",
        tip: "Cron expression yaad karne ka trick: '* * * * *' = minute hour day month weekday. Online tools jaise crontab.guru use karo expression test karne ke liye.",
      },
      {
        heading: "Dynamic Scheduling — Runtime pe schedule karo/hatao",
        content: `SchedulerRegistry se runtime mein tasks add/remove/pause kar sakte ho:`,
        code: `// src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class DynamicTasksService {
  private readonly logger = new Logger(DynamicTasksService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {}

  // Runtime pe naya cron job add karo
  addCronJob(name: string, cronExpression: string, callback: () => void) {
    const job = new CronJob(cronExpression, () => {
      this.logger.log(\`Running dynamic job: \${name}\`);
      callback();
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();
    this.logger.log(\`Job \${name} added with schedule: \${cronExpression}\`);
  }

  // Job delete karo
  deleteCronJob(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    this.logger.log(\`Job \${name} deleted\`);
  }

  // Job pause karo
  stopCronJob(name: string) {
    const job = this.schedulerRegistry.getCronJob(name);
    job.stop();
    this.logger.log(\`Job \${name} paused\`);
  }

  // Sab running jobs list karo
  getCronJobs() {
    const jobs = this.schedulerRegistry.getCronJobs();
    return Array.from(jobs.keys());
  }
}

// Controller mein use karo:
@Post('scheduler')
async scheduleTask(@Body() dto: { name: string; cron: string }) {
  this.tasksService.addCronJob(dto.name, dto.cron, async () => {
    await this.sendNotifications();
  });
  return { message: \`Task '\${dto.name}' scheduled\` };
}`,
        language: "typescript",
        tip: "Dynamic scheduling use karo jab users apna khud ka schedule set kar sakein (jaise 'har Monday ko report bhejo').",
      },
    ],
    sectionsEn: [
      {
        heading: "What are Scheduled Tasks?",
        content: `Scheduled tasks are jobs that run automatically at a fixed time or at regular intervals.

**Real-world uses:**
- **Database cleanup** — Delete expired sessions every night
- **Email reports** — Send weekly summary every Monday morning
- **Subscription checks** — Verify expired subscriptions every hour
- **Data sync** — Pull data from a third-party API every 5 minutes
- **Cache refresh** — Refresh popular data every 30 minutes`,
        code: `# Install
npm install @nestjs/schedule
npm install -D @types/cron

# Register in AppModule:
ScheduleModule.forRoot()

# In your service:
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // Run every day at 8am (Indian timezone)
  @Cron('0 8 * * *', { timeZone: 'Asia/Kolkata' })
  async sendMorningReport() {
    await this.emailService.sendDailyReport();
  }

  // Run every 30 seconds
  @Interval(30000)
  async syncCache() {
    await this.cacheService.refresh();
  }

  // Run once 10 seconds after startup
  @Timeout(10000)
  handleStartup() {
    this.logger.log('Startup task completed');
  }
}

// Cron expression format:
// second minute hour day month weekday
// '0 0 * * *' = every midnight
// '*/5 * * * *' = every 5 minutes`,
        language: "typescript",
        tip: "Use https://crontab.guru to visually build and test cron expressions before using them in code.",
      },
    ],
    mcqs: [
      {
        q: "@Cron('0 8 * * *') kab chalega?",
        options: [
          "Har 8 minute mein",
          "Har din subah 8 baje",
          "Har 8 ghante mein",
          "Sirf 8 baar",
        ],
        correct: 1,
        explain: "Cron expression '0 8 * * *' = minute:0, hour:8, day:*, month:*, weekday:* = Har din 8:00 AM pe.",
      },
      {
        q: "@Interval(5000) aur @Cron mein kya fark hai?",
        options: [
          "Koi fark nahi",
          "@Interval milliseconds mein hai, @Cron cron expression use karta hai",
          "@Interval zyada accurate hai",
          "@Interval sirf ek baar chalata hai",
        ],
        correct: 1,
        explain: "@Interval(n) har n milliseconds mein simple repeat karta hai. @Cron() cron expression use karta hai jisse specific time/day target kar sakte hain.",
      },
    ],
    mcqsEn: [
      {
        q: "When does @Cron('0 8 * * *') run?",
        options: [
          "Every 8 minutes",
          "Every day at 8:00 AM",
          "Every 8 hours",
          "Only 8 times",
        ],
        correct: 1,
        explain: "Cron '0 8 * * *' = minute 0, hour 8, every day, every month, every weekday = 8:00 AM daily.",
      },
    ],
    cheatsheet: [
      "ScheduleModule.forRoot() — module mein register karo",
      "@Cron('expr') — cron expression pe task",
      "@Interval(ms) — har N milliseconds mein",
      "@Timeout(ms) — startup ke baad N ms mein ek baar",
      "CronExpression.EVERY_MINUTE — readable constant",
      "CronExpression.EVERY_DAY_AT_MIDNIGHT",
      "SchedulerRegistry — runtime scheduling",
      "timeZone: 'Asia/Kolkata' — IST timezone",
    ],
    cheatsheetEn: [
      "ScheduleModule.forRoot() — register in AppModule",
      "@Cron('expr') — run on cron schedule",
      "@Interval(ms) — run every N milliseconds",
      "@Timeout(ms) — run once after N ms from startup",
      "CronExpression.EVERY_MINUTE — readable constant",
      "SchedulerRegistry — add/remove jobs at runtime",
      "timeZone: 'Asia/Kolkata' — set timezone",
    ],
    revision: [
      "@Cron = specific time/day target karo",
      "@Interval = simple repeat (milliseconds)",
      "@Timeout = startup ke baad ek baar",
      "crontab.guru = cron expression test karo",
    ],
    revisionEn: [
      "@Cron = target specific time/day with a cron expression",
      "@Interval = simple repeat every N milliseconds",
      "@Timeout = run once after N ms from app startup",
      "Use crontab.guru to build and verify cron expressions",
    ],
  },

  {
    id: "events",
    title: "Events — Event-Driven Architecture",
    titleEn: "Events — Event-Driven Architecture",
    emoji: "📡",
    category: "Advanced",
    description: "EventEmitter2 se loose coupling — ek module doosre module ko directly call na kare",
    descriptionEn: "Use EventEmitter2 for loose coupling — modules communicate without direct dependencies",
    sections: [
      {
        heading: "Event-Driven Architecture kyun?",
        content: `Socho ek order place hota hai. Order service ko:
1. Email service ko notify karna hai (confirmation email)
2. Inventory service ko notify karna hai (stock update)
3. Notification service ko notify karna hai (push notification)

**Without Events (tight coupling):**
OrderService mein EmailService, InventoryService, NotificationService sab inject karne padte. Agar naya service aaye, OrderService modify karna padega.

**With Events (loose coupling):**
OrderService sirf ek event emit karta hai: 'order.placed'. Jo bhi services interested hain woh automatically handle karte hain. OrderService ko kuch nahi pata kaun sun raha hai.`,
        diagram: `
TIGHT COUPLING vs EVENT-DRIVEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tight Coupling (BAD):
  OrderService
    │── calls → EmailService.send()
    │── calls → InventoryService.update()
    └── calls → NotificationService.push()
  (OrderService sabse jaanta hai)

Event-Driven (GOOD):
  OrderService
    └── emits → 'order.placed' event

          'order.placed'
           ├──► EmailHandler.handle()
           ├──► InventoryHandler.handle()
           └──► NotificationHandler.handle()
  (OrderService kuch nahi jaanta, bas event emit karta hai)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install karo
npm install @nestjs/event-emitter eventemitter2

# ─────────────────────────────────────
# app.module.ts
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,     // 'order.*' se sab order events match hoga
      delimiter: '.',     // dot separator
      maxListeners: 20,
    }),
  ],
})
export class AppModule {}

# ─────────────────────────────────────
# Events payload define karo (type-safe)
# src/orders/events/order-placed.event.ts
export class OrderPlacedEvent {
  constructor(
    public readonly orderId: number,
    public readonly userId: number,
    public readonly items: OrderItem[],
    public readonly total: number,
    public readonly userEmail: string,
  ) {}
}

# ─────────────────────────────────────
# Order Service — event emit karo
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderPlacedEvent } from './events/order-placed.event';

@Injectable()
export class OrdersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async placeOrder(userId: number, dto: CreateOrderDto) {
    // Order save karo
    const order = await this.orderRepo.save({
      userId, items: dto.items, status: 'pending',
    });

    // Event emit karo — baaki services handle karengi
    this.eventEmitter.emit(
      'order.placed',
      new OrderPlacedEvent(
        order.id, userId, dto.items,
        this.calculateTotal(dto.items),
        dto.userEmail,
      ),
    );

    return order; // Fast response — baaki background mein
  }
}`,
        language: "typescript",
      },
      {
        heading: "Event Listeners — Events handle karo",
        content: `Event listeners independently handle events. OrderService ko inke baare mein kuch nahi pata.`,
        code: `// src/email/email.listener.ts
import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderPlacedEvent } from '../orders/events/order-placed.event';

@Injectable()
export class EmailListener {
  private readonly logger = new Logger(EmailListener.name);

  @OnEvent('order.placed', { async: true }) // async se main thread block nahi hoga
  async handleOrderPlaced(event: OrderPlacedEvent) {
    this.logger.log(\`Email bhej raha hun order #\${event.orderId} ke liye\`);
    
    await this.emailService.send({
      to: event.userEmail,
      subject: \`Order #\${event.orderId} confirm hua!\`,
      template: 'order-confirmation',
      data: { orderId: event.orderId, total: event.total },
    });
  }
}

// src/inventory/inventory.listener.ts
@Injectable()
export class InventoryListener {
  @OnEvent('order.placed')
  async handleOrderPlaced(event: OrderPlacedEvent) {
    for (const item of event.items) {
      await this.inventoryRepo.decrement(
        { productId: item.productId },
        'stock', item.quantity,
      );
    }
  }
}

// src/notifications/notification.listener.ts
@Injectable()
export class NotificationListener {
  @OnEvent('order.*')  // wildcard — sab order events
  async handleAnyOrderEvent(event: OrderPlacedEvent) {
    await this.notificationService.push({
      userId: event.userId,
      message: \`Order #\${event.orderId} update!\`,
    });
  }
}

// ─────────────────────────────────────
// Listeners ko module mein register karo
@Module({
  providers: [EmailListener, InventoryListener, NotificationListener],
})
export class ListenersModule {}`,
        language: "typescript",
        tip: "@OnEvent('order.*') wildcard se sab 'order.' se shuru hone wale events match honge. { async: true } se listener async run hoga — main response block nahi hoga.",
      },
    ],
    sectionsEn: [
      {
        heading: "Why Event-Driven Architecture?",
        content: `Imagine placing an order. The OrderService needs to:
1. Notify EmailService (confirmation email)
2. Notify InventoryService (stock update)
3. Notify NotificationService (push notification)

**Without Events (tight coupling):**
OrderService must inject EmailService, InventoryService, and NotificationService. Adding a new service requires modifying OrderService.

**With Events (loose coupling):**
OrderService emits one event: 'order.placed'. Any service that cares about orders listens for it independently. OrderService doesn't know who is listening.`,
        diagram: `
TIGHT COUPLING vs EVENT-DRIVEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tight Coupling (BAD):
  OrderService
    │── calls → EmailService.send()
    │── calls → InventoryService.update()
    └── calls → NotificationService.push()

Event-Driven (GOOD):
  OrderService
    └── emits → 'order.placed' event
           │
           ├──► EmailListener (handles email)
           ├──► InventoryListener (updates stock)
           └──► NotificationListener (sends push)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install
npm install @nestjs/event-emitter eventemitter2

# Setup in AppModule:
EventEmitterModule.forRoot({ wildcard: true, delimiter: '.' })

# Emit an event:
this.eventEmitter.emit('order.placed', new OrderPlacedEvent(...));

# Listen for an event:
@OnEvent('order.placed', { async: true })
async handleOrderPlaced(event: OrderPlacedEvent) {
  await this.emailService.sendConfirmation(event.userEmail);
}

# Wildcard listener:
@OnEvent('order.*')   // matches order.placed, order.shipped, etc.
handleAnyOrder(event: any) {}`,
        language: "typescript",
        tip: "{ async: true } in @OnEvent makes the listener async — the main request thread won't be blocked waiting for the listener to finish.",
      },
    ],
    mcqs: [
      {
        q: "Event-driven architecture ka main faida kya hai?",
        options: [
          "Code faster run karta hai",
          "Modules loosely coupled hote hain — independent changes ho sakti hain",
          "Database queries kam hoti hain",
          "Memory usage kam hoti hai",
        ],
        correct: 1,
        explain: "Event-driven architecture mein modules ek doosre ko directly nahi jaante. New listener add karna source module ko touch kiye bina hota hai — loose coupling.",
      },
      {
        q: "@OnEvent('order.*') kya match karega?",
        options: [
          "Sirf 'order.*' literal string",
          "Koi bhi event jo 'order.' se shuru ho",
          "Sirf 'order.placed'",
          "Sab events",
        ],
        correct: 1,
        explain: "Wildcard '*' se 'order.' se shuru hone wale sab events match hote hain — order.placed, order.shipped, order.cancelled sab.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the main benefit of event-driven architecture?",
        options: [
          "Code runs faster",
          "Modules are loosely coupled — they can change independently",
          "Fewer database queries",
          "Less memory usage",
        ],
        correct: 1,
        explain: "Loose coupling: modules don't need to know about each other. You can add a new listener without touching the emitting module at all.",
      },
    ],
    cheatsheet: [
      "EventEmitterModule.forRoot({wildcard:true}) — setup",
      "eventEmitter.emit('event.name', payload) — event emit",
      "@OnEvent('event.name') — specific event listen",
      "@OnEvent('order.*') — wildcard listener",
      "{ async: true } — async listener",
      "Event class banao — type-safe payload",
      "Listener ko module providers mein register karo",
    ],
    cheatsheetEn: [
      "EventEmitterModule.forRoot({ wildcard: true }) — setup",
      "eventEmitter.emit('event.name', payload) — emit event",
      "@OnEvent('event.name') — listen for specific event",
      "@OnEvent('order.*') — wildcard: match all order.* events",
      "{ async: true } — run listener asynchronously",
      "Create event classes for type-safe payloads",
      "Register listeners in module providers array",
    ],
    revision: [
      "Events = loose coupling (modules ek doosre ko directly nahi jaante)",
      "emit() = event bhejo, @OnEvent() = event suno",
      "Wildcard 'order.*' = sab matching events catch karo",
      "async: true = listener background mein chale",
    ],
    revisionEn: [
      "Events = loose coupling (modules don't directly depend on each other)",
      "emit() = publish event, @OnEvent() = subscribe to event",
      "Wildcard 'order.*' = catch all matching events",
      "async: true = listener runs in background, non-blocking",
    ],
  },

  {
    id: "serialization",
    title: "Serialization — Response Clean Karo",
    titleEn: "Serialization — Cleaning API Responses",
    emoji: "🧹",
    category: "Intermediate",
    description: "Password aur private fields response se hata do — ClassSerializerInterceptor se",
    descriptionEn: "Remove passwords and private fields from responses using ClassSerializerInterceptor",
    sections: [
      {
        heading: "Serialization kyun zaroori hai?",
        content: `Jab tum kisi user ka data return karte ho, usme password hash, internal IDs, admin-only fields bhi hote hain. Yeh sab client ko nahi bhejne chahiye.

**Without serialization (dangerous):**
User ka password hash response mein aa jaata hai — client ko dikhna nahi chahiye.

**With Serialization:**
@Exclude() se specific fields automatically response se hat jaati hain. @Expose() se control karo kya dikhana hai.`,
        code: `# Install
npm install class-transformer

# ─────────────────────────────────────
# Entity mein decorators add karo
# src/users/user.entity.ts
import { Exclude, Expose, Transform, Type } from 'class-transformer';

export class UserEntity {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()          // Response se hata do
  password: string;

  @Exclude()          // Response se hata do
  refreshToken: string;

  @Expose()
  role: string;

  @Expose()
  @Transform(({ value }) => value?.toISOString())  // Date format change karo
  createdAt: Date;

  // Calculated field
  @Expose()
  get fullProfile(): string {
    return \`\${this.name} (\${this.email})\`;
  }

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

# ─────────────────────────────────────
# main.ts ya controller mein interceptor register karo
import { ClassSerializerInterceptor, ReflectMetadataProvider } from '@nestjs/common';

// Option 1: Globally sab routes pe
app.useGlobalInterceptors(new ClassSerializerInterceptor(
  app.get(Reflector),
));

// Option 2: Specific controller pe
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {}`,
        language: "typescript",
      },
      {
        heading: "Groups — Different Roles ke liye Different Response",
        content: `Admin ko zyada data dikhao, normal user ko kam. Groups se yeh easily manage karo:`,
        code: `// src/users/user.entity.ts
import { Exclude, Expose } from 'class-transformer';

export class UserEntity {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  // Sirf 'admin' group mein include karo
  @Expose({ groups: ['admin'] })
  internalNotes: string;

  @Expose({ groups: ['admin'] })
  loginAttempts: number;

  // Sirf 'owner' group mein (apna profile dekhna)
  @Expose({ groups: ['owner', 'admin'] })
  phoneNumber: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}

// ─────────────────────────────────────
// Controller mein groups specify karo
import { SerializeOptions } from '@nestjs/common';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  // Normal user — default (no special group)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOne(id);
    return new UserEntity(user);
  }

  // Admin only — admin group ke fields bhi
  @Get('admin/:id')
  @SerializeOptions({ groups: ['admin'] })
  @UseGuards(AdminGuard)
  async findOneAdmin(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.findOne(id));
  }

  // Owner (apna profile) — phone number bhi
  @Get('me')
  @SerializeOptions({ groups: ['owner'] })
  async getMyProfile(@Request() req) {
    return new UserEntity(await this.usersService.findOne(req.user.id));
  }
}`,
        language: "typescript",
        tip: "ClassSerializerInterceptor + class-transformer = powerful combination. Ek baar setup karo, sab responses automatically clean ho jaate hain.",
        warning: "Entity pe @Exclude() lagane ke baad useGlobalInterceptors(ClassSerializerInterceptor) zaroor karo. Bina interceptor ke @Exclude() kaam nahi karega.",
      },
    ],
    sectionsEn: [
      {
        heading: "Why is Serialization necessary?",
        content: `When you return a user object, it may contain the password hash, refresh tokens, or admin-only fields. These should NEVER reach the client.

**Without serialization (dangerous):**
The password hash appears in the API response — a serious security vulnerability.

**With Serialization:**
@Exclude() automatically removes specific fields from the response. @Expose() gives you control over exactly what is included.`,
        code: `# Install
npm install class-transformer

# Add decorators to your entity:
export class UserEntity {
  @Expose() id: number;
  @Expose() name: string;
  @Expose() email: string;

  @Exclude()          // Never sent to client
  password: string;

  @Exclude()          // Never sent to client
  refreshToken: string;
}

# Register interceptor globally in main.ts:
app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

# In controller — wrap in entity class:
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  const user = await this.usersService.findOne(id);
  return new UserEntity(user);  // @Exclude fields are stripped here
}`,
        language: "typescript",
        tip: "ClassSerializerInterceptor + class-transformer is a powerful combination. Set it up once globally, and all responses are automatically cleaned.",
        warning: "After adding @Exclude() to an entity, you MUST register ClassSerializerInterceptor. Without the interceptor, @Exclude() has no effect.",
      },
      {
        heading: "Groups — Different responses for different roles",
        content: `Show more data to admins, less to regular users. Use groups to manage this cleanly:`,
        code: `export class UserEntity {
  @Expose() id: number;
  @Expose() name: string;
  @Expose() email: string;
  @Exclude() password: string;

  @Expose({ groups: ['admin'] })     // only for admins
  internalNotes: string;

  @Expose({ groups: ['owner', 'admin'] })  // owner + admin
  phoneNumber: string;
}

// In controller:
@Get(':id')
findOne(@Param('id') id: number) {
  return new UserEntity(user);           // no groups = default fields only
}

@Get('admin/:id')
@SerializeOptions({ groups: ['admin'] }) // include admin fields
@UseGuards(AdminGuard)
findAdmin(@Param('id') id: number) {
  return new UserEntity(user);
}`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "@Exclude() kab kaam karta hai?",
        options: [
          "Sirf entity mein hona kaafi hai",
          "ClassSerializerInterceptor ke saath hi kaam karta hai",
          "TypeORM automatically handle karta hai",
          "Kabhi kaam nahi karta",
        ],
        correct: 1,
        explain: "@Exclude() sirf tab kaam karta hai jab ClassSerializerInterceptor registered ho. Bina interceptor ke class-transformer decorators ignore ho jaate hain.",
      },
      {
        q: "UserEntity class mein constructor mein Object.assign(this, partial) kyun likhte hain?",
        options: [
          "TypeORM ki zaroorat hai",
          "Plain object ko class instance mein convert karo taaki decorators kaam karein",
          "Performance improvement",
          "JSON.parse() ki zaroorat hai",
        ],
        correct: 1,
        explain: "Object.assign(this, partial) database ka plain object leke UserEntity instance banata hai. Class instance pe hi @Exclude/@Expose decorators apply hote hain.",
      },
    ],
    mcqsEn: [
      {
        q: "When does @Exclude() work?",
        options: [
          "Just adding it to the entity is enough",
          "Only when ClassSerializerInterceptor is registered",
          "TypeORM handles it automatically",
          "It never works",
        ],
        correct: 1,
        explain: "@Exclude() only takes effect when ClassSerializerInterceptor is active. Without the interceptor, class-transformer decorators are ignored.",
      },
    ],
    cheatsheet: [
      "@Exclude() — field response se hata do",
      "@Expose() — explicitly field include karo",
      "@Expose({ groups: ['admin'] }) — group-based expose",
      "@Transform(({value}) => ...) — value transform karo",
      "ClassSerializerInterceptor — main.ts mein register karo",
      "@SerializeOptions({ groups: [...] }) — controller pe groups",
      "new UserEntity(plain) — plain object → class instance",
    ],
    cheatsheetEn: [
      "@Exclude() — remove field from response",
      "@Expose() — explicitly include a field",
      "@Expose({ groups: ['admin'] }) — group-based field inclusion",
      "@Transform(({value}) => ...) — transform the value",
      "ClassSerializerInterceptor — register in main.ts globally",
      "@SerializeOptions({ groups: [...] }) — apply groups per route",
      "new UserEntity(plainObject) — convert plain → class instance",
    ],
    revision: [
      "@Exclude() = response se field hata do (password, tokens)",
      "ClassSerializerInterceptor zaroori hai — bina iske kaam nahi",
      "Groups = different roles ke liye different fields",
      "new UserEntity(plain) = class instance banao for decorators",
    ],
    revisionEn: [
      "@Exclude() = remove a field from response (passwords, tokens)",
      "ClassSerializerInterceptor is required — @Exclude has no effect without it",
      "Groups = different fields for different user roles",
      "new UserEntity(plain) = convert plain object to class instance",
    ],
  },
];
