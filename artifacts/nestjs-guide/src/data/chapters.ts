export interface Chapter {
  id: string;
  title: string;
  titleEn?: string;
  emoji: string;
  category: string;
  description: string;
  descriptionEn?: string;
  sections: Section[];
  sectionsEn?: Section[];
  mcqs?: MCQ[];
  mcqsEn?: MCQ[];
  cheatsheet?: string[];
  cheatsheetEn?: string[];
  revision?: string[];
  revisionEn?: string[];
}

export interface Section {
  heading: string;
  content: string;
  code?: string;
  language?: string;
  tip?: string;
  diagram?: string;
  warning?: string;
}

export interface MCQ {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

export const chapters: Chapter[] = [
  {
    id: "intro",
    title: "NestJS Kya Hai?",
    emoji: "🚀",
    category: "Basics",
    description: "NestJS ki introduction, kyun banaya gaya, aur Express se kya fark hai",
    sections: [
      {
        heading: "NestJS — Simple bhasha mein samjho",
        content: `NestJS ek Node.js framework hai jo TypeScript ke saath kaam karta hai. Socho aise — agar Node.js ek khaali plot hai, toh NestJS ek ready-made building structure hai jisme sab kuch pehle se organized hai.

**Kyun NestJS banaya gaya?**
Node.js/Express applications bahut quickly messy ho jaate hain. Koi fixed structure nahi hota — kuch log files aise organize karte hain, kuch aise. NestJS ne Angular ki architecture ko backend mein laaya.

**NestJS vs Express:**
- Express: Khaali zameen — khud sab banao
- NestJS: Apartment complex — sab rooms ready hain, bas furniture rakho`,
        diagram: `
REQUEST FLOW IN NESTJS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTTP Request
       │
       ▼
  ┌─────────────┐
  │  Middleware  │  ← Logging, CORS, Body parsing
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │    Guard    │  ← Authentication check
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │ Interceptor │  ← Request transform (before)
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │    Pipe     │  ← Validation / Transform
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │ Controller  │  ← Route handler
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │   Service   │  ← Business Logic
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │  Database   │  ← Data layer
  └─────────────┘
         │
         ▼
  ┌─────────────┐
  │ Interceptor │  ← Response transform (after)
  └──────┬──────┘
         │
         ▼
  HTTP Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        tip: "NestJS ko Angular ka backend version samjho. Dono mein modules, decorators, aur dependency injection same concept use karte hain.",
      },
      {
        heading: "Installation — NestJS install karo",
        content: `Pehle Node.js install hona chahiye (v18 ya usse upar). Phir NestJS CLI install karo:`,
        code: `# NestJS CLI globally install karo
npm install -g @nestjs/cli

# CLI version check karo
nest --version

# Naya project banao (TypeScript select karo)
nest new my-nest-app

# Project folder mein jao
cd my-nest-app

# Development server chalao
npm run start:dev
# Server: http://localhost:3000`,
        language: "bash",
        tip: "npm run start:dev use karo development mein — yeh hot-reload karta hai jab bhi code change karo.",
      },
      {
        heading: "Project Structure — Har file ka kaam samjho",
        content: `Project create hone ke baad yeh structure milta hai:`,
        code: `my-nest-app/
├── src/
│   ├── app.controller.ts     ← HTTP routes (receptionist)
│   ├── app.controller.spec.ts← Test file
│   ├── app.module.ts         ← Root module (HQ building)
│   ├── app.service.ts        ← Business logic (actual worker)
│   └── main.ts               ← Entry point (darvaza)
│
├── test/
│   ├── app.e2e-spec.ts       ← End-to-end tests
│   └── jest-e2e.json
│
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json             ← NestJS CLI config
├── package.json
├── tsconfig.build.json
└── tsconfig.json`,
        language: "text",
        tip: "main.ts se app start hoti hai. Yeh poori application ka starting point hai — isko NestFactory.create() se app banata hai.",
      },
      {
        heading: "main.ts — App kaise start hoti hai",
        content: `Yeh sabse important file hai:`,
        code: `// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NestJS application create karo
  const app = await NestFactory.create(AppModule);
  
  // CORS enable karo (agar frontend alag port par hai)
  app.enableCors();
  
  // Global prefix add karo (optional)
  // app.setGlobalPrefix('api'); // sab routes: /api/...
  
  // Port par listen karo
  await app.listen(3000);
  console.log('App chal raha hai: http://localhost:3000');
}

bootstrap(); // function call karo`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "NestJS internally kaunsa framework use karta hai by default?",
        options: ["Fastify", "Express", "Koa", "Hapi"],
        correct: 1,
        explain: "NestJS by default Express use karta hai andar se, lekin Fastify mein bhi switch kar sakte hain.",
      },
      {
        q: "@Module() decorator mein kaunse options available hain?",
        options: [
          "imports, exports, controllers, providers",
          "imports, routes, services, guards",
          "modules, controllers, middleware",
          "providers, routes, interceptors",
        ],
        correct: 0,
        explain: "@Module() mein 4 options hote hain: imports (doosre modules), exports (share karne ke liye), controllers, aur providers.",
      },
      {
        q: "NestJS kis language mein likha gaya hai?",
        options: ["JavaScript", "TypeScript", "Python", "Go"],
        correct: 1,
        explain: "NestJS TypeScript mein likha gaya hai aur TypeScript-first framework hai.",
      },
    ],
    cheatsheet: [
      "nest new <project> — naya project banao",
      "nest g mo <name> — module banao",
      "nest g co <name> — controller banao",
      "nest g s <name> — service banao",
      "npm run start:dev — development server",
      "npm run build — production build",
      "npm run test — tests chalao",
    ],
    revision: [
      "NestJS = Node.js + TypeScript + Angular-inspired architecture",
      "Flow: Request → Middleware → Guard → Interceptor → Pipe → Controller → Service",
      "main.ts = entry point, AppModule = root module",
      "Hot-reload ke liye npm run start:dev use karo",
    ],
  },
  {
    id: "modules",
    title: "Modules — App organize karo",
    emoji: "📦",
    category: "Basics",
    description: "NestJS modules se app ko clean aur scalable banao",
    sections: [
      {
        heading: "Module kya hota hai?",
        content: `Module NestJS ka building block hai. Socho aise — ek bada ghar banate waqt tum rooms banate ho (bedroom, kitchen, bathroom). Har room ka apna kaam hota hai. Usi tarah NestJS mein har feature ke liye alag module banate hain.

**Module Structure:**
- **Controllers** — Routes handle karte hain
- **Providers** — Services, repositories, factories
- **Imports** — Doosre modules ko include karo
- **Exports** — Apne providers dusron ko dene ke liye`,
        diagram: `
MODULE ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   AppModule (Root)
   ┌──────────────────────────────┐
   │  imports: [                  │
   │    UsersModule,              │
   │    ProductsModule,           │
   │    AuthModule,               │
   │    TypeOrmModule,            │
   │  ]                           │
   └──────────────────────────────┘
          │           │          │
          ▼           ▼          ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │  Users   │ │ Products │ │  Auth    │
   │  Module  │ │  Module  │ │  Module  │
   │──────────│ │──────────│ │──────────│
   │Controller│ │Controller│ │Controller│
   │ Service  │ │ Service  │ │ Service  │
   └──────────┘ └──────────┘ └──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],    // doosre modules import karo
  controllers: [AppController],
  providers: [AppService],
  exports: [],               // kisi aur module ko dene ke liye
})
export class AppModule {}`,
        language: "typescript",
      },
      {
        heading: "Feature Module banao — Best Practice",
        content: `Har feature ke liye alag module banao. CLI se quickly banao:`,
        code: `# Users module banao
nest g module users
nest g controller users
nest g service users

# Yeh files create hongi:
# src/users/users.module.ts
# src/users/users.controller.ts
# src/users/users.service.ts
# CLI automatically AppModule mein import bhi kar deta hai!`,
        language: "bash",
      },
      {
        heading: "Global Module — Sab jagah available karo",
        content: `Agar koi module sab jagah chahiye (jaise DatabaseModule, ConfigModule), toh @Global() decorator use karo:`,
        code: `// Bina import kiye sab modules mein available hoga
@Global()
@Module({
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}

// Ab baaki modules mein import nahi karna padega
// NestJS automatically inject kar dega

// Dynamic module — config ke saath setup karo
@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        { provide: 'DB_OPTIONS', useValue: options },
        DatabaseService,
      ],
      exports: [DatabaseService],
      global: true,
    };
  }
}

// Use karo:
DatabaseModule.forRoot({ host: 'localhost', port: 5432 })`,
        language: "typescript",
        tip: "Sirf truly shared services ko @Global() banao. Zyada global modules se dependency tracking mushkil ho jaati hai.",
      },
    ],
    mcqs: [
      {
        q: "Kaunsa decorator ek class ko NestJS module banata hai?",
        options: ["@Injectable()", "@Controller()", "@Module()", "@Component()"],
        correct: 2,
        explain: "@Module() decorator class ko NestJS module banata hai aur module metadata define karta hai.",
      },
      {
        q: "Module exports mein kya rakha jaata hai?",
        options: [
          "Controllers jo expose karne hain",
          "Providers jo doosre modules use kar sakein",
          "Routes jo public honi chahiye",
          "Services jo private hain",
        ],
        correct: 1,
        explain: "exports mein woh providers (services) rakhe jaate hain jo doosre modules import karke use kar sakein.",
      },
    ],
    cheatsheet: [
      "nest g module <name> — feature module banao",
      "@Global() — module ko globally available banao",
      "imports: [] — doosre modules include karo",
      "exports: [] — providers share karo",
      "DynamicModule — forRoot() pattern for configurable modules",
    ],
    revision: [
      "Module = feature ka container (Controller + Service + more)",
      "AppModule = root module, sab yahan register hote hain",
      "@Global() se module ko globally available banao (spam mat karo)",
      "forRoot() pattern = configurable dynamic modules",
    ],
  },
  {
    id: "controllers",
    title: "Controllers — Routes handle karo",
    emoji: "🎮",
    category: "Basics",
    description: "HTTP requests receive karo aur responses bhejo",
    sections: [
      {
        heading: "Controller kya hota hai?",
        content: `Controller HTTP requests receive karta hai aur response bhejta hai. Jaise ek receptionist jo customer ki baat sunti hai aur sahi department mein bhejti hai.

**HTTP Methods:**
- **GET** — Data padhna (list ya single item)
- **POST** — Naya data create karna
- **PUT** — Poora data update karna (replace)
- **PATCH** — Sirf kuch fields update karna
- **DELETE** — Data delete karna`,
        diagram: `
HTTP REQUEST → CONTROLLER FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Browser/Client
       │
       │  GET /users/123
       ▼
  ┌────────────────────────────┐
  │      UsersController       │
  │  @Controller('users')      │
  │                            │
  │  @Get(':id')               │
  │  findOne(@Param('id') id)  │
  │       │                    │
  └───────┼────────────────────┘
          │ calls
          ▼
  ┌────────────────────────────┐
  │       UsersService         │
  │  findOne(id: number)       │
  │    → database query        │
  └────────────────────────────┘
          │
          ▼
    JSON Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// src/users/users.controller.ts
import { 
  Controller, Get, Post, Put, Patch, Delete,
  Body, Param, Query, Headers, 
  HttpCode, HttpStatus, Req
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')  // base path: /users
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  // GET /users?page=1&limit=10
  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.usersService.findAll({ page, limit });
  }

  // GET /users/123
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // POST /users — 201 Created
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // PATCH /users/123 — partial update
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(+id, dto);
  }

  // DELETE /users/123
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}`,
        language: "typescript",
      },
      {
        heading: "Route Parameters — Sab tarike data lene ke",
        content: `Controllers mein request se data lene ke multiple ways hain:`,
        code: `@Controller('api')
export class ExampleController {

  // URL Params: /api/users/42
  @Get('users/:id')
  byId(@Param('id') id: string) { }

  // Multiple params: /api/users/42/posts/5
  @Get('users/:userId/posts/:postId')
  byIds(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
  ) { }

  // Query strings: /api/search?q=rahul&page=2
  @Get('search')
  search(
    @Query('q') query: string,
    @Query('page') page: string = '1',
  ) { }

  // Request body (POST/PUT/PATCH mein)
  @Post('users')
  create(@Body() body: CreateUserDto) { }

  // Specific body field
  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) { }

  // Headers se data
  @Get('me')
  getMe(@Headers('authorization') auth: string) { }

  // Poora Request object (avoid karo jab possible ho)
  @Get('full')
  full(@Req() req: Request) {
    return req.url;
  }
}`,
        language: "typescript",
        tip: "@Param() → URL se, @Query() → URL params se (?key=val), @Body() → request body se, @Headers() → request headers se.",
        warning: "PUT vs PATCH: PUT se poora object replace hota hai, PATCH se sirf kuch fields update hoti hain. Production mein PATCH prefer karo.",
      },
    ],
    mcqs: [
      {
        q: "GET /users/42 mein '42' ko access karne ke liye kaunsa decorator use karein?",
        options: ["@Query('id')", "@Body('id')", "@Param('id')", "@Header('id')"],
        correct: 2,
        explain: "@Param() URL path parameters extract karta hai. Route @Get(':id') define karna padta hai.",
      },
      {
        q: "POST request mein 201 status code bhejne ke liye?",
        options: [
          "@Status(201)",
          "@HttpCode(HttpStatus.CREATED)",
          "@Response(201)",
          "@Code(201)",
        ],
        correct: 1,
        explain: "@HttpCode(HttpStatus.CREATED) ya @HttpCode(201) use karo. HttpStatus enum readable names provide karta hai.",
      },
      {
        q: "GET /products?page=2&limit=5 mein 'page' value kaise lein?",
        options: [
          "@Param('page') page",
          "@Query('page') page",
          "@Body('page') page",
          "@Header('page') page",
        ],
        correct: 1,
        explain: "@Query() decorator URL query parameters (?key=value) extract karta hai.",
      },
    ],
    cheatsheet: [
      "@Controller('path') — base route set karo",
      "@Get(), @Post(), @Put(), @Patch(), @Delete() — HTTP methods",
      "@Param('id') — URL params (/users/:id)",
      "@Query('page') — query strings (?page=1)",
      "@Body() — request body (POST/PUT)",
      "@HttpCode(201) — custom status code",
    ],
    revision: [
      "Controller = Receptionist, Service = Worker",
      "Business logic controller mein mat likho — sab service mein",
      "@Param URL se, @Query URL params se, @Body request body se",
      "PATCH use karo partial update ke liye, PUT full replace ke liye",
    ],
  },
  {
    id: "services",
    title: "Services & Providers — Business Logic",
    emoji: "⚙️",
    category: "Basics",
    description: "Business logic yahan likhi jaati hai — database operations, calculations sab",
    sections: [
      {
        heading: "Service kya hota hai?",
        content: `Service mein actual business logic hoti hai. Controller sirf request receive karta hai aur service ko deta hai. Service processing karti hai.

**Golden Rule:** Controller thin rakho, service fat rakho.

**Provider Types:**
- **Service** — Business logic (@Injectable class)
- **Repository** — Database access
- **Factory** — Complex object creation
- **Helper** — Utility functions`,
        code: `// src/users/users.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

@Injectable() // DI container mein register karo
export class UsersService {
  // In-memory storage (baad mein database se replace karenge)
  private users: User[] = [
    { id: 1, name: 'Rahul Kumar', email: 'rahul@example.com', createdAt: new Date() },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', createdAt: new Date() },
  ];
  private nextId = 3;

  // Saare users — pagination ke saath
  findAll(options: { page: number; limit: number }) {
    const start = (options.page - 1) * options.limit;
    const end = start + options.limit;
    return {
      data: this.users.slice(start, end),
      total: this.users.length,
      page: options.page,
    };
  }

  // ID se ek user
  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException(\`User #\${id} nahi mila\`);
    }
    return user;
  }

  // Email se find (authentication ke liye useful)
  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  // Naya user create karo
  create(dto: CreateUserDto): User {
    // Email already exists?
    if (this.findByEmail(dto.email)) {
      throw new ConflictException('Email pehle se registered hai');
    }
    const user: User = {
      id: this.nextId++,
      ...dto,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  // User update karo
  update(id: number, dto: UpdateUserDto): User {
    const user = this.findOne(id); // throws if not found
    if (dto.email && dto.email !== user.email) {
      if (this.findByEmail(dto.email)) {
        throw new ConflictException('Yeh email already use ho rahi hai');
      }
    }
    Object.assign(user, dto);
    return user;
  }

  // User delete karo
  remove(id: number): void {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx === -1) throw new NotFoundException(\`User #\${id} nahi mila\`);
    this.users.splice(idx, 1);
  }
}`,
        language: "typescript",
      },
      {
        heading: "Dependency Injection — Magic samjho",
        content: `Dependency Injection (DI) NestJS ka core concept hai. Service ko manually new nahi karna padta — NestJS automatically inject karta hai.

**Bina DI ke (purana tarika):**
Controller mein new UsersService() likhte — tight coupling, testing mushkil.

**DI ke saath:**
Constructor mein declare karo, NestJS automatic inject karta hai. Test mein mock inject kar sakte ho.`,
        diagram: `
DEPENDENCY INJECTION FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  NestJS IoC Container
  ┌─────────────────────────────┐
  │                             │
  │  @Injectable()              │
  │  UsersService ─────────┐   │
  │                         │   │
  │  @Injectable()          │   │
  │  EmailService ──────┐   │   │
  │                      │   │   │
  └──────────────────────┼───┼───┘
                         │   │
                         ▼   ▼
                    ┌──────────────┐
                    │ UsersController│
                    │ constructor(  │
                    │  usersService,│
                    │  emailService │
                    │ ) {}          │
                    └──────────────┘
       NestJS creates instances and injects them!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// Multiple services inject karo
@Injectable()
export class UsersService {
  constructor(
    private readonly emailService: EmailService,
    private readonly configService: ConfigService,
  ) {}

  async create(dto: CreateUserDto) {
    const user = await this.saveUser(dto);
    // Email service use karo
    await this.emailService.sendWelcome(user.email);
    return user;
  }
}`,
        language: "typescript",
        tip: "private readonly use karo constructor mein — isse service ko accidentally reassign nahi kar sakte.",
      },
    ],
    mcqs: [
      {
        q: "@Injectable() decorator kya karta hai?",
        options: [
          "Class ko HTTP endpoint banata hai",
          "Class ko NestJS DI container mein register karta hai",
          "Class ko module banata hai",
          "Class ko globally available banata hai",
        ],
        correct: 1,
        explain: "@Injectable() se NestJS ko pata chalta hai ki yeh class DI system ke through inject ki ja sakti hai.",
      },
      {
        q: "Service mein NotFoundException kab throw karein?",
        options: [
          "Jab request body invalid ho",
          "Jab database down ho",
          "Jab requested resource exist na kare",
          "Jab user unauthorized ho",
        ],
        correct: 2,
        explain: "NotFoundException (404) tab throw karo jab koi resource (user by ID) exist na kare.",
      },
    ],
    cheatsheet: [
      "@Injectable() — service ko DI mein register karo",
      "private readonly — constructor injection best practice",
      "NotFoundException — 404, resource not found",
      "ConflictException — 409, duplicate data",
      "BadRequestException — 400, invalid input",
      "Object.assign(target, source) — partial update trick",
    ],
    revision: [
      "Service = Business logic ka ghar",
      "@Injectable() = DI registration (zaruri hai!)",
      "Controller thin, Service fat — golden rule",
      "DI = NestJS khud instances banata aur inject karta hai",
    ],
  },
  {
    id: "dto",
    title: "DTO & Validation — Data validate karo",
    emoji: "✅",
    category: "Basics",
    description: "Request data validate karo aur type-safe banao class-validator ke saath",
    sections: [
      {
        heading: "DTO kya hai aur kyun zaroori hai?",
        content: `DTO = Data Transfer Object. Yeh ek class hai jo define karti hai ki API request mein kaun se fields aane chahiye, unka type kya hoga, aur kya validation apply hogi.

**Kyun DTO?**
- User se invalid data aaye toh pehle hi rok lo
- TypeScript type safety mile
- API ka contract clear ho (kya expect karna hai)
- Security — unwanted fields strip ho jayein`,
        code: `# Validation packages install karo
npm install class-validator class-transformer
npm install @nestjs/mapped-types`,
        language: "bash",
      },
      {
        heading: "DTO banao — Complete example",
        content: `class-validator ke common decorators:`,
        code: `// src/users/dto/create-user.dto.ts
import { 
  IsString, IsEmail, IsNotEmpty, IsOptional,
  MinLength, MaxLength, IsInt, Min, Max, 
  IsEnum, IsArray, IsUrl, Matches, IsBoolean
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

// Enum define karo
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

export class CreateUserDto {
  @IsNotEmpty({ message: 'Naam zaruri hai' })
  @IsString()
  @MinLength(2, { message: 'Naam kam se kam 2 characters' })
  @MaxLength(50, { message: 'Naam zyada se zyada 50 characters' })
  @Transform(({ value }) => value?.trim()) // whitespace remove karo
  name: string;

  @IsEmail({}, { message: 'Valid email address dalo' })
  @Transform(({ value }) => value?.toLowerCase()) // lowercase karo
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password kam se kam 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password mein uppercase, lowercase, aur number hona chahiye',
  })
  password: string;

  @IsOptional()
  @IsInt()
  @Min(18, { message: '18 saal se upar hona chahiye' })
  @Max(100)
  @Type(() => Number) // string to number convert
  age?: number;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Valid role chahiye' })
  role?: UserRole = UserRole.USER;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // array ke har element par
  tags?: string[];

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  isActive?: boolean = true;
}`,
        language: "typescript",
      },
      {
        heading: "ValidationPipe globally enable karo",
        content: `main.ts mein globally configure karo:`,
        code: `// src/main.ts
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,           // DTO mein nahi hai → strip ho jaaye
    forbidNonWhitelisted: true,// extra fields → 400 error
    transform: true,           // auto type conversion
    transformOptions: {
      enableImplicitConversion: true, // string '1' → number 1
    },
    disableErrorMessages: false, // production mein true karo
    exceptionFactory: (errors) => {
      // Custom error format
      const messages = errors.map(e => 
        Object.values(e.constraints || {}).join(', ')
      );
      return new BadRequestException(messages);
    },
  }));
  
  await app.listen(3000);
}`,
        language: "typescript",
        tip: "whitelist: true bahut important hai — yeh ensure karta hai ki DTO mein defined fields ke alawa koi bhi field database mein na jaaye. Security ke liye must!",
        warning: "transform: true enable karo warna @Type() decorators kaam nahi karenge aur age: '18' (string) ko number mein convert nahi karega.",
      },
      {
        heading: "UpdateDto — PartialType se banao",
        content: `Update ke liye sab fields optional chahiye — PartialType se automatic:`,
        code: `// src/users/dto/update-user.dto.ts
import { PartialType, OmitType, PickType, IntersectionType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional } from 'class-validator';

// Method 1: Saari fields optional ho jaati hain
export class UpdateUserDto extends PartialType(CreateUserDto) {}

// Method 2: Kuch fields remove karo (password update ke liye alag DTO)
export class UpdateProfileDto extends OmitType(CreateUserDto, 
  ['password', 'role'] as const) {}

// Method 3: Sirf kuch fields rakhna
export class UpdatePasswordDto extends PickType(CreateUserDto, 
  ['password'] as const) {
  @IsString()
  @IsOptional()
  currentPassword?: string;
}`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "ValidationPipe mein whitelist: true kya karta hai?",
        options: [
          "Sirf allowed IPs ko access deta hai",
          "DTO mein defined na ho toh fields request se remove kar deta hai",
          "All validations skip karta hai",
          "JWT token validate karta hai",
        ],
        correct: 1,
        explain: "whitelist: true se DTO mein jitne fields defined hain, sirf woh request mein accept honge. Extra fields silently strip ho jaate hain.",
      },
      {
        q: "PartialType(CreateUserDto) kya karta hai?",
        options: [
          "Saari fields required banata hai",
          "Saari fields optional banata hai",
          "Password field remove karta hai",
          "Naya DTO create karta hai without validations",
        ],
        correct: 1,
        explain: "PartialType sari fields ko optional bana deta hai — perfect for PATCH/update operations.",
      },
    ],
    cheatsheet: [
      "@IsNotEmpty() — empty string check",
      "@IsEmail() — email format check",
      "@MinLength(n) / @MaxLength(n) — string length",
      "@IsInt() @Min() @Max() — number validation",
      "@IsOptional() — field optional banao",
      "@IsEnum(EnumType) — enum values check",
      "PartialType — update DTO banao (all optional)",
      "OmitType — kuch fields hatao",
    ],
    revision: [
      "DTO = Data shape define karna + validation rules",
      "ValidationPipe globally enable karo main.ts mein",
      "whitelist: true = security ke liye must",
      "transform: true = auto type conversion",
      "PartialType = update DTO banane ka shortcut",
    ],
  },
  {
    id: "database",
    title: "Database — TypeORM ke saath",
    emoji: "🗄️",
    category: "Intermediate",
    description: "PostgreSQL connect karo, entities banao, aur CRUD operations karo",
    sections: [
      {
        heading: "TypeORM setup karo",
        content: `TypeORM sabse popular ORM hai NestJS ke saath. Yeh database tables ko TypeScript classes mein represent karta hai.

**Supported Databases:**
PostgreSQL, MySQL, SQLite, MongoDB, Oracle, aur zyada.`,
        code: `# Install karo
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/config

# .env file banao
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_USER=postgres
# DATABASE_PASS=secret
# DATABASE_NAME=nestjs_db`,
        language: "bash",
      },
      {
        heading: "Database connection configure karo",
        content: ``,
        code: `// src/app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Config pehle load karo
    ConfigModule.forRoot({ isGlobal: true }),
    
    // TypeORM async setup (env variables use karo)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASS'),
        database: config.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: config.get('NODE_ENV') !== 'production', // Dev only!
        logging: config.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
})
export class AppModule {}`,
        language: "typescript",
        warning: "synchronize: true production mein KABHI mat use karo! Yeh schema changes automatically apply karta hai — data loss ho sakta hai. Production mein migrations use karo.",
      },
      {
        heading: "Entity banao — Database table define karo",
        content: `Entity ek TypeScript class hai jo database table represent karti hai. Har property = ek column.`,
        code: `// src/users/entities/user.entity.ts
import { 
  Entity, Column, PrimaryGeneratedColumn, 
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
  OneToMany, ManyToOne, Index, BeforeInsert
} from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users') // table naam
@Index(['email']) // fast lookups
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ select: false }) // queries mein default hidden
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn() // soft delete support
  deletedAt: Date;

  // Password hash karo save se pehle
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}`,
        language: "typescript",
      },
      {
        heading: "Repository Pattern — Database operations",
        content: ``,
        code: `// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // Saare users + pagination
  async findAll(page = 1, limit = 10) {
    const [users, total] = await this.userRepo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
      where: { isActive: true },
    });
    return { data: users, total, page, lastPage: Math.ceil(total / limit) };
  }

  // ID se find
  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException(\`User #\${id} nahi mila\`);
    return user;
  }

  // Email se find (auth ke liye — password bhi chahiye)
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ 
      where: { email }, 
      select: ['id', 'email', 'password', 'role'] // password include karo
    });
  }

  // Create
  async create(dto: CreateUserDto): Promise<User> {
    const existing = await this.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already exists');
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  // Update
  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, dto);
    return this.userRepo.save(user);
  }

  // Soft delete (deletedAt set hoga, actual delete nahi)
  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.userRepo.softDelete(id);
  }

  // Complex queries — QueryBuilder use karo
  async search(query: string): Promise<User[]> {
    return this.userRepo
      .createQueryBuilder('user')
      .where('user.name ILIKE :query OR user.email ILIKE :query', 
        { query: \`%\${query}%\` })
      .andWhere('user.isActive = :active', { active: true })
      .orderBy('user.name', 'ASC')
      .getMany();
  }
}`,
        language: "typescript",
        tip: "findAndCount() pagination ke liye bahut useful hai — ek hi query mein data aur total count dono milta hai.",
      },
    ],
    mcqs: [
      {
        q: "TypeORM mein soft delete kaise implement karein?",
        options: [
          "@Column({ softDelete: true })",
          "@DeleteDateColumn() + softDelete() method",
          "@SoftDelete() decorator",
          "delete() method ko false pass karo",
        ],
        correct: 1,
        explain: "@DeleteDateColumn() entity mein add karo aur repository.softDelete(id) call karo. Record database mein rahega lekin deletedAt set ho jaayega.",
      },
      {
        q: "synchronize: true production mein kyun dangerous hai?",
        options: [
          "Yeh slow hai",
          "Yeh schema automatically change karta hai jisse data loss ho sakta hai",
          "Yeh sirf SQLite support karta hai",
          "Yeh TypeScript mein kaam nahi karta",
        ],
        correct: 1,
        explain: "synchronize: true entity changes ko automatically database mein apply karta hai — columns drop ho sakte hain, data kho sakta hai. Production mein migrations use karo.",
      },
    ],
    cheatsheet: [
      "@Entity() — class ko DB table banao",
      "@PrimaryGeneratedColumn() — auto-increment ID",
      "@Column() — regular column",
      "@CreateDateColumn() / @UpdateDateColumn() — timestamps",
      "@DeleteDateColumn() — soft delete support",
      "@InjectRepository(Entity) — repository inject karo",
      "findAndCount() — pagination ke liye",
      "createQueryBuilder() — complex queries",
    ],
    revision: [
      "Entity = Database table ka TypeScript representation",
      "synchronize: true = dev only, production mein false!",
      "@BeforeInsert() = save se pehle logic (password hashing)",
      "softDelete = record delete nahi hota, sirf deletedAt set hota hai",
    ],
  },
  {
    id: "auth",
    title: "Authentication — JWT ke saath",
    emoji: "🔐",
    category: "Intermediate",
    description: "JWT tokens, login/register, aur protected routes implement karo",
    sections: [
      {
        heading: "Authentication kaise kaam karta hai?",
        content: `Authentication = Tum kaun ho? (Identity verify karna)
Authorization = Tum kya kar sakte ho? (Permission check karna)

**JWT Flow:**
1. User login karta hai (email + password)
2. Server verify karta hai
3. Server JWT token banata hai (secret se sign)
4. Client token save karta hai (localStorage/cookie)
5. Future requests mein token bhejta hai
6. Server token verify karta hai`,
        diagram: `
JWT AUTHENTICATION FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Client                    Server
    │                          │
    │  POST /auth/login         │
    │  { email, password }      │
    │ ─────────────────────────►│
    │                          │
    │                    Verify password
    │                    Create JWT token
    │                          │
    │  { access_token: "xxx" }  │
    │ ◄─────────────────────────│
    │                          │
    │  GET /users              │
    │  Authorization: Bearer xxx│
    │ ─────────────────────────►│
    │                          │
    │                    Verify JWT token
    │                    Extract user info
    │                          │
    │  { id: 1, name: "Rahul" } │
    │ ◄─────────────────────────│

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install karo
npm install @nestjs/jwt @nestjs/passport passport passport-jwt passport-local bcrypt
npm install -D @types/passport-jwt @types/passport-local @types/bcrypt`,
        language: "bash",
      },
      {
        heading: "Auth Module setup karo",
        content: ``,
        code: `// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule, // UsersService use karne ke liye
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { 
          expiresIn: config.get('JWT_EXPIRES', '7d') 
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}`,
        language: "typescript",
      },
      {
        heading: "Auth Service — Login aur Register logic",
        content: ``,
        code: `// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

export interface JwtPayload {
  sub: number;    // user ID (JWT standard: 'sub')
  email: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    // UsersService se user banao (password hash hoga @BeforeInsert mein)
    const user = await this.usersService.create(dto);
    const { password, ...result } = user; // password hide karo
    return { user: result, ...this.generateTokens(user) };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Email ya password galat hai');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Email ya password galat hai');
    
    if (!user.isActive) throw new UnauthorizedException('Account disabled hai');
    
    const { password: _, ...result } = user;
    return { user: result, ...this.generateTokens(user) };
  }

  private generateTokens(user: any) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
    };
  }

  async validateUser(payload: JwtPayload) {
    return this.usersService.findOne(payload.sub);
  }
}`,
        language: "typescript",
      },
      {
        heading: "JWT Strategy aur Auth Guard",
        content: ``,
        code: `// src/auth/strategies/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService, private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) throw new UnauthorizedException();
    return user; // yeh request.user mein available hoga
  }
}

// src/auth/guards/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

// Controller mein use karo:
@Controller('users')
@UseGuards(JwtAuthGuard) // poore controller protected
export class UsersController {

  @Get('me')
  getProfile(@Request() req: any) {
    return req.user; // JWT strategy ne set kiya
  }
}`,
        language: "typescript",
        tip: "@CurrentUser() custom decorator banao request.user ko easily access karne ke liye — Controller mein @Request() req.user se cleaner lagta hai.",
      },
    ],
    mcqs: [
      {
        q: "JWT token mein 'sub' claim kya store karta hai?",
        options: [
          "Subject (user ka naam)",
          "Subscription type",
          "Subject identifier (user ID)",
          "Secret key",
        ],
        correct: 2,
        explain: "'sub' JWT standard claim hai — Subject identifier matlab user ka unique ID. Isse user identify karte hain.",
      },
      {
        q: "bcrypt.compare() kya return karta hai?",
        options: [
          "Hashed password",
          "Boolean (true/false) — passwords match hain ya nahi",
          "Original password",
          "JWT token",
        ],
        correct: 1,
        explain: "bcrypt.compare(plainText, hash) Promise<boolean> return karta hai — true agar match, false agar nahi.",
      },
    ],
    cheatsheet: [
      "JWT = Header.Payload.Signature (base64 encoded)",
      "bcrypt.hash(pass, 10) — password hash karo",
      "bcrypt.compare(plain, hash) — verify karo",
      "@UseGuards(JwtAuthGuard) — route protect karo",
      "req.user — authenticated user (guard ke baad)",
      "jwtService.sign(payload) — token banao",
      "jwtService.verify(token) — token validate karo",
    ],
    revision: [
      "Authentication = kaun ho? / Authorization = kya kar sakte ho?",
      "JWT = stateless token, server kuch store nahi karta",
      "secret se sign hota hai — tamper-proof",
      "Authorization: Bearer <token> header mein aata hai",
    ],
  },
  {
    id: "guards",
    title: "Guards & Roles — Access Control",
    emoji: "🛡️",
    category: "Intermediate",
    description: "Route access control, role-based authorization, aur custom guards",
    sections: [
      {
        heading: "Guard kya hota hai?",
        content: `Guard decide karta hai ki koi request aage jaayegi ya nahi. Socho ek bouncer ki tarah — valid ticket hai toh andar, warna bahar.

**Guard vs Middleware:**
- Middleware: Request modify karna, logging
- Guard: Authorize ya reject karna (boolean return)
- Guard ko ExecutionContext milta hai — route info available hoti hai`,
        code: `// src/auth/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Route par kaun-si roles chahiye check karo
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(), // method level
      context.getClass(),   // class level
    ]);
    
    if (!requiredRoles) return true; // koi restriction nahi
    
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user?.role);
  }
}

// src/auth/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

// Controller mein use karo:
@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard) // pehle JWT, phir Roles
export class AdminController {

  @Get('users')
  @Roles('admin', 'superadmin')
  getAllUsers() { ... }

  @Delete('users/:id')
  @Roles('superadmin') // sirf superadmin
  deleteUser(@Param('id') id: string) { ... }
}`,
        language: "typescript",
        tip: "Guards hamesha order mein execute hote hain. JwtAuthGuard pehle lagao — warna RolesGuard mein req.user undefined hoga.",
      },
      {
        heading: "Public Routes — Kuch routes ko bypass karo",
        content: `Kuch routes public hone chahiye (login, register) — unhe guard se exempt karo:`,
        code: `// src/auth/decorators/public.decorator.ts
import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// Enhanced JWT Guard jo @Public() check kare
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (isPublic) return true; // public route → bypass
    
    return super.canActivate(context); // JWT check karo
  }
}

// Controller mein globally guard lagao, specific routes public karo
@Controller('auth')
export class AuthController {
  
  @Public() // JWT check bypass
  @Post('login')
  login(@Body() dto: LoginDto) { ... }

  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto) { ... }

  @Get('me') // yeh protected hai (no @Public)
  getMe(@Request() req: any) { return req.user; }
}`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "Guard mein canActivate() kya return karna chahiye access allow karne ke liye?",
        options: ["null", "false", "true", "undefined"],
        correct: 2,
        explain: "canActivate() true return kare toh request aage jaayegi, false ya exception throw karne par request reject ho jaayegi.",
      },
    ],
    cheatsheet: [
      "@UseGuards(Guard1, Guard2) — guards apply karo (order matters!)",
      "Reflector — metadata read karo decorators se",
      "@Roles('admin') + RolesGuard — role-based access",
      "@Public() — guard bypass karo specific route ke liye",
      "CanActivate interface — guard ke liye implement karo",
    ],
    revision: [
      "Guard = Bouncer (allow ya block karta hai)",
      "Multiple guards = sab true hone chahiye",
      "Reflector = decorator metadata padhne ke liye tool",
      "@Public() = globally guarded app mein public routes",
    ],
  },
  {
    id: "middleware",
    title: "Middleware, Pipes & Interceptors",
    emoji: "🔧",
    category: "Intermediate",
    description: "Request/response lifecycle ke sab layers samjho aur customize karo",
    sections: [
      {
        heading: "Execution Pipeline — Poora flow",
        content: `Har request NestJS mein is order se guzarti hai:`,
        diagram: `
COMPLETE REQUEST LIFECYCLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Incoming Request
         │
         ▼
  ┌──────────────┐
  │  Middleware  │ → app.use() ya NestMiddleware
  └──────┬───────┘   use: logging, CORS, body-parser
         │
         ▼
  ┌──────────────┐
  │    Guard     │ → @UseGuards() 
  └──────┬───────┘   use: auth, permissions
         │
         ▼
  ┌──────────────┐
  │ Interceptor  │ → @UseInterceptors() [BEFORE]
  └──────┬───────┘   use: logging, transform
         │
         ▼
  ┌──────────────┐
  │    Pipe      │ → @UsePipes() ya param level
  └──────┬───────┘   use: validation, transform
         │
         ▼
  ┌──────────────┐
  │  Controller  │ → route handler execute
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │   Service    │ → business logic
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │ Interceptor  │ → @UseInterceptors() [AFTER]
  └──────┬───────┘   use: response transform
         │
         ▼
  Outgoing Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// src/common/middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();
    
    res.on('finish', () => {
      const elapsed = Date.now() - start;
      console.log(\`[\${method}] \${originalUrl} → \${res.statusCode} (\${elapsed}ms)\`);
    });
    
    next();
  }
}

// Module mein apply karo
@Module({...})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // sab routes par
      // ya specific: .forRoutes({ path: 'users', method: RequestMethod.GET })
  }
}`,
        language: "typescript",
      },
      {
        heading: "Interceptor — Response transform karo",
        content: `Interceptor response ko wrap karo ya request timing measure karo:`,
        code: `// src/common/interceptors/transform.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Response wrapper interceptor
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    
    return next.handle().pipe(
      map(data => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
        path: context.switchToHttp().getRequest().url,
      })),
      tap(() => {
        const elapsed = Date.now() - start;
        if (elapsed > 1000) {
          console.warn(\`Slow request: \${elapsed}ms\`);
        }
      }),
    );
  }
}

// main.ts mein globally apply karo
app.useGlobalInterceptors(new TransformInterceptor());

// Ab sab responses aisa dikhengi:
// {
//   "success": true,
//   "data": { ... actual data ... },
//   "timestamp": "2024-01-01T00:00:00.000Z",
//   "path": "/users"
// }`,
        language: "typescript",
        tip: "Global interceptor se sab responses ek consistent format mein aate hain — frontend team ko bahut easy lagta hai.",
      },
      {
        heading: "Exception Filter — Errors handle karo",
        content: ``,
        code: `// src/common/filters/http-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch() // sabhi exceptions catch karo
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception instanceof HttpException
      ? exception.getResponse()
      : 'Internal server error';

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

// main.ts mein globally apply karo
app.useGlobalFilters(new AllExceptionsFilter());`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "Interceptor mein response transform karne ke liye kya use karte hain?",
        options: ["tap()", "map()", "filter()", "reduce()"],
        correct: 1,
        explain: "map() operator se response data transform karte hain. tap() sirf side effects ke liye (logging, etc.) use hota hai.",
      },
      {
        q: "Middleware aur Guard mein main difference kya hai?",
        options: [
          "Middleware TypeScript mein, Guard JavaScript mein",
          "Middleware ExecutionContext nahi jaanta, Guard jaanta hai",
          "Guard global, Middleware local hota hai",
          "Middleware async, Guard sync hota hai",
        ],
        correct: 1,
        explain: "Guard ko ExecutionContext milta hai jisse route handler info, metadata sab milti hai. Middleware sirf req/res/next access karta hai.",
      },
    ],
    cheatsheet: [
      "Order: Middleware → Guard → Interceptor → Pipe → Controller",
      "Middleware = request/response modify karo",
      "Guard = allow ya block karo",
      "Interceptor = before/after handler logic (RxJS)",
      "Pipe = validate/transform data",
      "Exception Filter = errors ko catch aur format karo",
    ],
    revision: [
      "Pipeline order yaad rakho: M-G-I-P-C (MahaGuruInterceptorPipesController)",
      "Interceptor = RxJS Observables use karta hai",
      "@Catch() = exception filter sab errors pakdta hai",
      "TransformInterceptor = consistent response format",
    ],
  },
  {
    id: "config",
    title: "Config & Environment — Secrets manage karo",
    emoji: "🔑",
    category: "Intermediate",
    description: "Environment variables, configuration management, aur secrets",
    sections: [
      {
        heading: "Config Module setup karo",
        content: `Production mein database password, JWT secret jaise values code mein hardcode nahi karte — .env file mein rakhte hain aur config module se access karte hain.`,
        code: `npm install @nestjs/config

# .env file (root folder mein)
NODE_ENV=development
PORT=3000

# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=super_secret_password
DATABASE_NAME=mydb

# JWT
JWT_SECRET=your-very-long-random-secret-key-here
JWT_EXPIRES=7d

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=email_password

# .gitignore mein zarur add karo!
# .env
# .env.local`,
        language: "bash",
        warning: ".env file kabhi bhi GitHub push mat karo! .gitignore mein add karo. Production mein environment variables directly set karo (Heroku, AWS, etc.)",
      },
      {
        heading: "Validation Schema — Config validate karo",
        content: `App start pe hi check karo ki sab required env variables set hain ya nahi:`,
        code: `// src/config/configuration.ts
import { plainToInstance } from 'class-transformer';
import { IsEnum, IsInt, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsInt()
  PORT: number;

  @IsString()
  DATABASE_HOST: string;

  @IsInt()
  DATABASE_PORT: number;

  @IsString()
  JWT_SECRET: string;
}

// Validation function
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  
  if (errors.length > 0) {
    throw new Error(\`Config validation failed:\\n\${errors.toString()}\`);
    // App start nahi hogi agar required vars missing hain!
  }
  return validatedConfig;
}

// app.module.ts mein use karo:
ConfigModule.forRoot({
  isGlobal: true,
  validate, // yeh function pass karo
})`,
        language: "typescript",
        tip: "Config validation se app start pe hi pata chal jaata hai ki koi environment variable missing hai. Production mein unexpected crashes se bachata hai.",
      },
      {
        heading: "Typed Config Service — Type safety ke saath",
        content: ``,
        code: `// src/config/app.config.ts — Typed configuration
export const appConfig = () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    name: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES || '7d',
  },
});

// app.module.ts mein:
ConfigModule.forRoot({
  isGlobal: true,
  load: [appConfig], // config factory
})

// Service mein use karo (type-safe!):
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getDatabaseConfig() {
    return this.config.get('database'); // typed!
  }

  getJwtSecret(): string {
    return this.config.getOrThrow('jwt.secret'); // throws if missing
  }
}`,
        language: "typescript",
      },
    ],
    cheatsheet: [
      "ConfigModule.forRoot({ isGlobal: true }) — globally available",
      "configService.get('KEY') — value lao (undefined ho sakta hai)",
      "configService.getOrThrow('KEY') — value lao (throw karo if missing)",
      "validate function — startup pe config validate karo",
      "load: [configFactory] — nested config objects",
      ".env → .gitignore mein zarur add karo!",
    ],
    revision: [
      "Secrets kabhi code mein hardcode mat karo",
      "isGlobal: true se sab module mein import nahi karna",
      "getOrThrow() prefer karo — undefined values se bachao",
      "Startup validation = production surprises se bachao",
    ],
  },
  {
    id: "swagger",
    title: "Swagger — API Documentation",
    emoji: "📋",
    category: "Intermediate",
    description: "Automatic API documentation generate karo Swagger ke saath",
    sections: [
      {
        heading: "Swagger kya hai aur kyun use karo?",
        content: `Swagger (OpenAPI) se automatically API documentation generate hoti hai. Frontend developers, testers, aur third parties ke liye API easily samajh aata hai. NestJS mein decorators se auto-generate hoti hai.

**Fayde:**
- No manual documentation likhna
- Interactive UI — browser mein directly APIs test karo
- Team collaboration easy hoti hai
- Client SDK generate ho sakta hai`,
        code: `# Install karo
npm install @nestjs/swagger swagger-ui-express`,
        language: "bash",
      },
      {
        heading: "Swagger setup karo",
        content: ``,
        code: `// src/main.ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('My NestJS API')
    .setDescription('Meri API ki complete documentation')
    .setVersion('1.0')
    .addTag('users', 'User management')
    .addTag('auth', 'Authentication')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT-auth', // security scheme name
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // /api-docs par documentation available hogi
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // token save raho page refresh pe
    },
  });

  await app.listen(3000);
  console.log('Docs: http://localhost:3000/api-docs');
}`,
        language: "typescript",
      },
      {
        heading: "Decorators se Documentation add karo",
        content: ``,
        code: `// DTO mein @ApiProperty add karo
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ 
    example: 'Rahul Kumar', 
    description: 'User ka full name',
    minLength: 2,
    maxLength: 50,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'rahul@example.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ example: 25, minimum: 18 })
  @IsOptional()
  age?: number;
}

// Controller mein decorators lagao
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')   // Swagger mein group karo
@ApiBearerAuth('JWT-auth') // JWT required hai
@Controller('users')
export class UsersController {

  @ApiOperation({ summary: 'Saare users lao', description: 'Paginated list of users' })
  @ApiResponse({ status: 200, description: 'Success', type: [User] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  findAll() { ... }

  @ApiOperation({ summary: 'ID se user lao' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  findOne(@Param('id') id: string) { ... }
}`,
        language: "typescript",
        tip: "Swagger UI mein 'Authorize' button se JWT token add karo — phir seedha browser mein protected APIs test kar sako.",
      },
    ],
    cheatsheet: [
      "@ApiTags('name') — group karo Swagger mein",
      "@ApiOperation({ summary }) — endpoint describe karo",
      "@ApiResponse({ status, description }) — response document karo",
      "@ApiProperty() — DTO field document karo",
      "@ApiBearerAuth() — JWT required mark karo",
      "SwaggerModule.setup('api-docs', app, doc) — UI mount karo",
    ],
    revision: [
      "Swagger = auto-generated interactive API docs",
      "/api-docs URL par browser mein test kar sakte ho",
      "@ApiProperty() DTO fields document karta hai",
      "addBearerAuth() se JWT Swagger mein test ho sakta hai",
    ],
  },
  {
    id: "caching",
    title: "Caching — Performance boost karo",
    emoji: "⚡",
    category: "Advanced",
    description: "Redis caching se repeated database queries avoid karo aur speed badhao",
    sections: [
      {
        heading: "Caching kya hai aur kyun chahiye?",
        content: `Caching mein frequently used data memory mein store karte hain taaki har baar database query na karni pade.

**Example:** Har request par countries list database se lana — yeh data rarely change hota hai. Ise cache mein store karo.

**Types of Caching:**
- **In-memory** (default) — app memory mein, restart pe clear
- **Redis** — separate server, restarts pe persist, distributed systems ke liye
- **CDN** — static assets cache`,
        diagram: `
CACHING FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  WITHOUT CACHE:
  Request → Controller → Service → DB → Response
                                   (every time!)

  WITH CACHE (First request):
  Request → Controller → Cache MISS → DB → Cache.set() → Response

  WITH CACHE (Subsequent requests):
  Request → Controller → Cache HIT → Response
                         (no DB query!)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install
npm install @nestjs/cache-manager cache-manager

# Redis ke saath (production)
npm install cache-manager-redis-yet ioredis`,
        language: "bash",
      },
      {
        heading: "Cache setup aur use karo",
        content: ``,
        code: `// app.module.ts
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 60 * 1000, // 60 seconds (milliseconds mein)
      max: 100,        // max 100 items cache mein
      
      // Redis ke saath (production):
      // store: redisStore,
      // host: 'localhost',
      // port: 6379,
    }),
  ],
})
export class AppModule {}

// Service mein manual cache use karo
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(): Promise<Product[]> {
    const cacheKey = 'all_products';
    
    // Cache mein check karo
    const cached = await this.cacheManager.get<Product[]>(cacheKey);
    if (cached) {
      console.log('Cache hit!');
      return cached;
    }
    
    // Cache miss — database se lao
    const products = await this.productRepo.find();
    
    // Cache mein store karo (5 minutes)
    await this.cacheManager.set(cacheKey, products, 300 * 1000);
    
    return products;
  }

  async update(id: number, dto: any) {
    const result = await this.productRepo.update(id, dto);
    // Cache invalidate karo update ke baad
    await this.cacheManager.del('all_products');
    return result;
  }
}`,
        language: "typescript",
        tip: "Cache invalidation sabse mushkil problem hai! Jab bhi data update ho, related cache keys delete karo warna purana data milta rahega.",
      },
    ],
    cheatsheet: [
      "CacheModule.register({ isGlobal: true, ttl: 60000 })",
      "@Inject(CACHE_MANAGER) — inject karo",
      "cacheManager.get(key) — cache se data lo",
      "cacheManager.set(key, value, ttl) — cache mein save karo",
      "cacheManager.del(key) — cache invalidate karo",
      "TTL = Time To Live (milliseconds mein)",
    ],
    revision: [
      "Cache = Frequently used data memory mein store karo",
      "Cache miss → DB query → Cache store",
      "Cache hit → Direct response (DB skip)",
      "Update pe cache invalidate karna mat bhulo!",
    ],
  },
  {
    id: "microservices",
    title: "Microservices — Distributed Systems",
    emoji: "🌐",
    category: "Advanced",
    description: "NestJS microservices architecture, message patterns, aur inter-service communication",
    sections: [
      {
        heading: "Microservices kya hota hai?",
        content: `Monolith = Sab kuch ek application mein. Microservices = Har feature alag service.

**Monolith vs Microservices:**
- Monolith: Simple, dev easy, scale hard
- Microservices: Complex setup, independent scale, team alag kaam kar sake

**NestJS Microservice Transport Layers:**
- TCP (default, simple)
- Redis Pub/Sub
- NATS
- RabbitMQ
- Kafka`,
        diagram: `
MICROSERVICES ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Client
    │
    ▼
  ┌─────────────┐
  │  API Gateway │  ← Entry point (main NestJS app)
  └──────┬──────┘
         │
    ┌────┼────┐────────────┐
    │    │    │            │
    ▼    ▼    ▼            ▼
  ┌────┐┌────┐┌──────┐  ┌──────┐
  │User││Auth││Order │  │Email │
  │ SVC││ SVC││  SVC │  │  SVC │
  └────┘└────┘└──────┘  └──────┘
    │              │
    ▼              ▼
  ┌────┐        ┌──────┐
  │ DB │        │  DB  │
  └────┘        └──────┘

  Services communicate via Message Broker:
  API Gateway ──TCP/Redis──► User Service
                           ◄── Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Install
npm install @nestjs/microservices`,
        language: "bash",
      },
      {
        heading: "Microservice create karo",
        content: ``,
        code: `// Microservice (users-service/src/main.ts)
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { port: 3001 },
    },
  );
  await app.listen();
  console.log('Users Microservice chal raha hai port 3001 par');
}
bootstrap();

// users.controller.ts (microservice mein)
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersController {
  
  // HTTP @Get() ki jagah @MessagePattern use karo
  @MessagePattern({ cmd: 'get_user' })
  getUser(@Payload() data: { id: number }) {
    return this.usersService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.create(data);
  }
}

// API Gateway (main app) mein client setup karo:
// api-gateway/app.module.ts
@Module({
  imports: [
    ClientsModule.register([{
      name: 'USERS_SERVICE', // injection token
      transport: Transport.TCP,
      options: { port: 3001 },
    }]),
  ],
})
export class AppModule {}

// API Gateway controller mein use karo
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private usersClient: ClientProxy,
  ) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersClient.send({ cmd: 'get_user' }, { id: +id });
  }
}`,
        language: "typescript",
        tip: "Beginners ke liye pehle monolith banao, scale issue aane par microservices mein migrate karo. Premature microservices = complexity without benefits.",
      },
    ],
    cheatsheet: [
      "NestFactory.createMicroservice() — microservice create",
      "@MessagePattern() — HTTP route ki jagah message handler",
      "@EventPattern() — fire-and-forget events ke liye",
      "ClientProxy.send() — request-response pattern",
      "ClientProxy.emit() — event emit (no response wait)",
      "Transport.TCP / REDIS / NATS — communication layers",
    ],
    revision: [
      "Microservices = Independent, separately deployable services",
      "@MessagePattern vs HTTP routes = different communication",
      "API Gateway = single entry point for all microservices",
      "Sirf zaroorat par microservices — over-engineering se bachao",
    ],
  },
  {
    id: "testing",
    title: "Testing — Code test karo properly",
    emoji: "🧪",
    category: "Advanced",
    description: "Unit tests, integration tests, aur E2E testing with Jest aur Supertest",
    sections: [
      {
        heading: "Testing philosophy — Kyun test karein?",
        content: `Tests likhne se:
- Bugs production se pehle pakad mein aate hain
- Refactoring safe hoti hai
- Code documentation ka kaam karta hai
- Team confidence badhti hai

**Testing Pyramid:**
- **Unit Tests (80%)** — Individual functions/services
- **Integration Tests (15%)** — Multiple units together
- **E2E Tests (5%)** — Full user flows`,
        diagram: `
TESTING PYRAMID:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        /\\
       /E2E\\       ← Slow, few
      /──────\\
     / Integr \\   ← Medium
    /──────────\\
   /  Unit Tests \\ ← Fast, many
  /______________\\

Rule: Zyada unit tests, kam E2E tests
Fast feedback loop maintain karo!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Test commands
npm run test          # unit tests ek baar chalao
npm run test:watch    # watch mode (development)
npm run test:cov      # coverage report
npm run test:e2e      # end-to-end tests`,
        language: "bash",
      },
      {
        heading: "Unit Testing — Service test karo",
        content: `Service ko isolated mein test karo — database ka mock banao:`,
        code: `// src/users/users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

// Mock repository type
type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepo = <T>(): MockRepository<T> => ({
  findOne: jest.fn(),
  findAndCount: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('UsersService', () => {
  let service: UsersService;
  let userRepo: MockRepository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepo<User>(), // real DB ki jagah mock!
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepo = module.get<MockRepository<User>>(getRepositoryToken(User));
  });

  describe('findOne', () => {
    it('should return user when found', async () => {
      const mockUser = { id: 1, name: 'Rahul', email: 'r@r.com' };
      userRepo.findOne.mockResolvedValue(mockUser);
      
      const result = await service.findOne(1);
      
      expect(result).toEqual(mockUser);
      expect(userRepo.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when user not found', async () => {
      userRepo.findOne.mockResolvedValue(null);
      
      await expect(service.findOne(999)).rejects.toThrow('User #999 nahi mila');
    });
  });

  describe('create', () => {
    it('should create and return user', async () => {
      const dto = { name: 'Test', email: 'test@test.com', password: 'pass' };
      const savedUser = { id: 1, ...dto };
      
      userRepo.findOne.mockResolvedValue(null); // email unique check
      userRepo.create.mockReturnValue(savedUser);
      userRepo.save.mockResolvedValue(savedUser);
      
      const result = await service.create(dto as any);
      expect(result).toEqual(savedUser);
    });
  });
});`,
        language: "typescript",
      },
      {
        heading: "E2E Testing — Full flow test karo",
        content: `Real HTTP requests bhejo aur full app test karo:`,
        code: `// test/users.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Users (e2e)', () => {
  let app: INestApplication;
  let authToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();

    // Login karke token lo
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@test.com', password: 'Test@1234' });
    authToken = loginRes.body.access_token;
  });

  it('GET /users — authorized access', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', \`Bearer \${authToken}\`)
      .expect(200)
      .expect(res => {
        expect(res.body.data).toBeInstanceOf(Array);
        expect(res.body.total).toBeDefined();
      });
  });

  it('GET /users — unauthorized should 401', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(401);
  });

  it('POST /users — validation error', () => {
    return request(app.getHttpServer())
      .post('/users')
      .set('Authorization', \`Bearer \${authToken}\`)
      .send({ name: 'a' }) // too short, email missing
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});`,
        language: "typescript",
        tip: "E2E tests ke liye separate test database use karo — production ya dev data mat corrupt karo. .env.test file banao.",
      },
    ],
    mcqs: [
      {
        q: "Jest mein kisi function ka mock kaise banate hain?",
        options: [
          "jest.create()",
          "jest.mock()",
          "jest.fn()",
          "jest.stub()",
        ],
        correct: 2,
        explain: "jest.fn() ek mock function banata hai. jest.mock() poori module mock karta hai.",
      },
      {
        q: "beforeEach() kab run hota hai?",
        options: [
          "Sirf pehle test se pehle",
          "Har test se pehle",
          "Sab tests ke baad",
          "describe() block mein sirf ek baar",
        ],
        correct: 1,
        explain: "beforeEach() har individual test (it/test) se pehle run hota hai — fresh state ensure karta hai.",
      },
    ],
    cheatsheet: [
      "jest.fn() — mock function banao",
      "mockResolvedValue(x) — async mock return value",
      "mockReturnValue(x) — sync mock return value",
      "expect(x).toEqual(y) — deep equality check",
      "expect(fn).rejects.toThrow() — exception expect karo",
      "supertest — HTTP requests in E2E tests",
      "beforeAll/afterAll — setup/teardown once",
      "beforeEach/afterEach — setup/teardown per test",
    ],
    revision: [
      "Unit = isolated, fast, mock dependencies",
      "E2E = real HTTP requests, full app test",
      "jest.fn().mockResolvedValue() = async mock",
      "Test database use karo E2E ke liye",
    ],
  },
  {
    id: "deployment",
    title: "Deployment — Production pe launch karo",
    emoji: "🚢",
    category: "Advanced",
    description: "NestJS app ko production mein deploy karo — Docker, environment, aur best practices",
    sections: [
      {
        heading: "Production Build karo",
        content: `Development aur production environment alag hote hain. Production ke liye optimize karo:`,
        code: `# Production build
npm run build
# Output: dist/ folder mein compiled JavaScript

# Production start
npm run start:prod
# Uses: node dist/main.js

# Package.json scripts:
# "build": "nest build"
# "start": "node dist/main"
# "start:dev": "nest start --watch"
# "start:prod": "node dist/main"
# "start:debug": "nest start --debug --watch"`,
        language: "bash",
      },
      {
        heading: "Docker ke saath deploy karo",
        content: `Docker se consistent environment milta hai — development aur production same rahta hai.`,
        code: `# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production=false

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Built files copy karo
COPY --from=builder /app/dist ./dist

# Non-root user (security)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["node", "dist/main"]`,
        language: "dockerfile",
      },
      {
        heading: "Production checklist aur best practices",
        content: ``,
        code: `# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_HOST=db
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password

volumes:
  postgres_data:

secrets:
  db_password:
    file: ./secrets/db_password.txt`,
        language: "yaml",
      },
      {
        heading: "Production Security & Performance",
        content: ``,
        code: `// src/main.ts — Production-ready setup
import helmet from 'helmet';
import * as compression from 'compression';
import { ThrottlerModule } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'], // production mein kam logs
  });

  // Security headers
  app.use(helmet());

  // Gzip compression
  app.use(compression());

  // CORS configure karo (specific origin allow karo)
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'https://myapp.com',
    credentials: true,
  });

  // Rate limiting
  // (ThrottlerModule app.module.ts mein add karo)

  // Global pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    disableErrorMessages: process.env.NODE_ENV === 'production',
  }));

  // Graceful shutdown
  app.enableShutdownHooks();

  const port = process.env.PORT || 3000;
  await app.listen(port);
}

// npm install helmet compression @nestjs/throttler`,
        language: "typescript",
        tip: "Graceful shutdown (enableShutdownHooks) important hai — yeh ensure karta hai ki ongoing requests complete hone ke baad hi app shut down ho.",
        warning: "Production mein HTTPS use karo, HTTP nahi. JWT secrets strong aur random rakho (minimum 32 characters). Regular dependency updates karo (npm audit).",
      },
    ],
    cheatsheet: [
      "npm run build → npm run start:prod",
      "Dockerfile: multi-stage build use karo",
      "helmet() — HTTP security headers",
      "compression() — response size kam karo",
      "enableCors() — specific origins allow karo",
      "enableShutdownHooks() — graceful shutdown",
      "NODE_ENV=production — production mode",
    ],
    revision: [
      "Build karo (dist/) → node dist/main se start karo",
      "Docker multi-stage = choti image size",
      "helmet + compression = security + performance",
      "Graceful shutdown = in-flight requests complete hone do",
    ],
  },
];
