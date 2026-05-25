export interface Chapter {
  id: string;
  title: string;
  emoji: string;
  sections: Section[];
}

export interface Section {
  heading: string;
  content: string;
  code?: string;
  language?: string;
  tip?: string;
}

export const chapters: Chapter[] = [
  {
    id: "intro",
    title: "NestJS Kya Hai?",
    emoji: "🚀",
    sections: [
      {
        heading: "Introduction — NestJS samjho aasaan bhasha mein",
        content: `NestJS ek Node.js framework hai jo TypeScript ke saath kaam karta hai. Socho aise — agar Node.js ek khaali zameen hai, toh NestJS ek ready-made building structure hai jisme sab kuch pehle se organized hai.

**Kyon use karein NestJS?**
- Code organized rahta hai (Angular jaisi structure)
- TypeScript support built-in hai
- Scalable apps banane mein helpful hai
- Testing easy ho jaati hai
- Enterprise-level apps ke liye best

**NestJS vs Express:**
Express mein tum khud sab kuch likhte ho — routing, middleware, validation sab. NestJS mein yeh sab already organized structure mein milta hai. NestJS actually andar se Express hi use karta hai!`,
        tip: "NestJS ko Angular ka backend version samjho. Dono mein modules, decorators, aur dependency injection same concept use karte hain.",
      },
      {
        heading: "Installation — NestJS install karo",
        content: `Pehle Node.js install hona chahiye (v16 ya usse upar). Phir NestJS CLI install karo:`,
        code: `# NestJS CLI globally install karo
npm install -g @nestjs/cli

# CLI version check karo
nest --version

# Naya project banao
nest new my-first-app

# Project folder mein jao
cd my-first-app

# Development server chalao
npm run start:dev`,
        language: "bash",
        tip: "npm run start:dev use karo development mein — yeh auto-reload karta hai jab bhi code change karo.",
      },
      {
        heading: "Project Structure — File structure samjho",
        content: `Jab project create hoga, toh yeh files dikhenge:`,
        code: `my-first-app/
├── src/
│   ├── app.controller.ts    ← HTTP requests handle karta hai
│   ├── app.controller.spec.ts ← Tests likhne ke liye
│   ├── app.module.ts        ← Main module (sab kuch yahan register hota hai)
│   ├── app.service.ts       ← Business logic yahan likhte hain
│   └── main.ts              ← App ka entry point (starting point)
├── test/
├── package.json
└── tsconfig.json`,
        language: "text",
        tip: "main.ts se app start hoti hai. Yeh poori application ka 'darvaza' hai.",
      },
    ],
  },
  {
    id: "modules",
    title: "Modules — App ko organize karo",
    emoji: "📦",
    sections: [
      {
        heading: "Module kya hota hai?",
        content: `Module NestJS ka building block hai. Socho aise — ek bada ghar banate waqt tum rooms banate ho (bedroom, kitchen, bathroom). Har room ka apna kaam hota hai. Usi tarah NestJS mein har feature ke liye alag module banate hain.

**Ek module mein kya hota hai?**
- **Controllers** — Routes handle karte hain (GET, POST, etc.)
- **Providers/Services** — Business logic
- **Imports** — Doosre modules ko yahan include karo
- **Exports** — Apne providers dusron ko dene ke liye`,
        code: `// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],        // doosre modules yahan add karo
  controllers: [AppController],  // controllers register karo
  providers: [AppService],       // services register karo
  exports: [],        // kisi aur module ko dene ke liye
})
export class AppModule {}`,
        language: "typescript",
        tip: "@Module yeh ek decorator hai — yeh class ke upar likha jaata hai aur NestJS ko batata hai 'yeh ek module hai'.",
      },
      {
        heading: "Naya Module banao — Users Module example",
        content: `CLI se module create karna bahut aasaan hai:`,
        code: `# Users module banao (CLI se)
nest generate module users
# ya short form:
nest g mo users

# Yeh file create hogi:
# src/users/users.module.ts`,
        language: "bash",
      },
      {
        heading: "Users Module code",
        content: `Manually module kuch aisa dikhta hai:`,
        code: `// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // agar doosre modules ko service chahiye
})
export class UsersModule {}

// Ab AppModule mein import karo:
// src/app.module.ts
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], // yahan add karo
  // ...
})
export class AppModule {}`,
        language: "typescript",
        tip: "Har feature ke liye alag folder aur module banao. Example: users/, products/, orders/ — isse code clean rahega.",
      },
    ],
  },
  {
    id: "controllers",
    title: "Controllers — Routes handle karo",
    emoji: "🎮",
    sections: [
      {
        heading: "Controller kya hota hai?",
        content: `Controller HTTP requests receive karta hai aur response bhejta hai. Jaise ek receptionist jo customer ki baat sunti hai aur sahi department mein bhejti hai.

**Common HTTP Methods:**
- **GET** — Data lena (list users, get user by id)
- **POST** — Naya data create karna
- **PUT/PATCH** — Data update karna
- **DELETE** — Data delete karna`,
        code: `// src/users/users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')  // base URL: /users
export class UsersController {
  
  // Service inject karo (Dependency Injection)
  constructor(private readonly usersService: UsersService) {}

  // GET /users — saare users lao
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // GET /users/123 — ek user lao by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // +id means string ko number mein convert karo
  }

  // POST /users — naya user banao
  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  // PATCH /users/123 — user update karo
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(+id, updateUserDto);
  }

  // DELETE /users/123 — user delete karo
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}`,
        language: "typescript",
        tip: "@Param() URL se value leta hai. @Body() request body se data leta hai. @Query() URL query params leta hai (?page=1).",
      },
      {
        heading: "Common Decorators — Important ones yaad rakho",
        content: `Yeh decorators daily use honge:`,
        code: `import { 
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, Headers, Req, Res,
  HttpCode, HttpStatus
} from '@nestjs/common';

@Controller('products')
export class ProductsController {

  // Query params: GET /products?page=1&limit=10
  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return { page, limit };
  }

  // Custom status code
  @Post()
  @HttpCode(HttpStatus.CREATED) // 201 status
  create(@Body() body: any) {
    return body;
  }

  // Headers se data lena
  @Get('info')
  getInfo(@Headers('authorization') auth: string) {
    return { auth };
  }
}`,
        language: "typescript",
      },
    ],
  },
  {
    id: "services",
    title: "Services — Business Logic",
    emoji: "⚙️",
    sections: [
      {
        heading: "Service kya hota hai?",
        content: `Service mein actual business logic hoti hai. Controller sirf request receive karta hai aur service ko deta hai. Service processing karti hai.

**Rule yaad rakho:** Controller mein logic mat likho — sab service mein likho. Controller sirf "traffic police" hai, service "actual worker" hai.`,
        code: `// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

// Abhi ke liye database ki jagah array use karte hain
interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable() // yeh decorator zaruri hai — service ko injectable banata hai
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Rahul', email: 'rahul@example.com' },
    { id: 2, name: 'Priya', email: 'priya@example.com' },
  ];

  // Saare users
  findAll(): User[] {
    return this.users;
  }

  // Ek user by ID
  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException(\`User #\${id} nahi mila!\`);
    }
    return user;
  }

  // Naya user banao
  create(data: Partial<User>): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: data.name || '',
      email: data.email || '',
    };
    this.users.push(newUser);
    return newUser;
  }

  // User update karo
  update(id: number, data: Partial<User>): User {
    const user = this.findOne(id);
    Object.assign(user, data);
    return user;
  }

  // User delete karo
  remove(id: number): { message: string } {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException(\`User #\${id} nahi mila!\`);
    this.users.splice(index, 1);
    return { message: 'User delete ho gaya!' };
  }
}`,
        language: "typescript",
        tip: "@Injectable() decorator se NestJS ko pata chalta hai ki yeh class inject ki ja sakti hai doosri jagah. Bina iske Dependency Injection kaam nahi karega.",
      },
    ],
  },
  {
    id: "dto",
    title: "DTO & Validation — Data validate karo",
    emoji: "✅",
    sections: [
      {
        heading: "DTO kya hota hai?",
        content: `DTO = Data Transfer Object. Yeh ek class hoti hai jo define karti hai ki request mein kaun-kaun se fields aane chahiye aur unka type kya hoga.

**Kyun DTO?**
- User se sahi data ensure karo
- TypeScript type safety mile
- Automatic validation possible ho`,
        code: `# Validation ke liye packages install karo
npm install class-validator class-transformer
npm install @nestjs/mapped-types`,
        language: "bash",
      },
      {
        heading: "DTO banao aur validate karo",
        content: ``,
        code: `// src/users/dto/create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Naam khali nahi hona chahiye' })
  @IsString()
  @MinLength(2, { message: 'Naam kam se kam 2 characters ka hona chahiye' })
  name: string;

  @IsEmail({}, { message: 'Valid email dalo' })
  email: string;

  @IsOptional() // optional field
  @IsInt()
  @Min(18, { message: 'Age 18 se upar honi chahiye' })
  age?: number;
}

// src/users/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType se saare fields optional ho jaate hain update ke liye
export class UpdateUserDto extends PartialType(CreateUserDto) {}`,
        language: "typescript",
      },
      {
        heading: "Validation Pipe enable karo",
        content: `Main.ts mein globally validation enable karo:`,
        code: `// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global validation pipe — yeh bohot important hai!
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // extra fields automatically remove ho jaayenge
    forbidNonWhitelisted: true, // extra fields pe error aayega
    transform: true,        // auto type conversion (string -> number)
  }));
  
  await app.listen(3000);
  console.log('Server chal raha hai: http://localhost:3000');
}
bootstrap();`,
        language: "typescript",
        tip: "whitelist: true bahut important hai — yeh ensure karta hai ki DTO mein defined fields ke alawa koi bhi field save na ho. Security ke liye zaruri!",
      },
    ],
  },
  {
    id: "database",
    title: "Database — TypeORM ke saath",
    emoji: "🗄️",
    sections: [
      {
        heading: "Database connect karo",
        content: `NestJS mein TypeORM ya Prisma use kar sakte ho. Hum TypeORM dekhenge — yeh NestJS ke saath best integrate hota hai.`,
        code: `# TypeORM aur PostgreSQL install karo
npm install @nestjs/typeorm typeorm pg

# Ya SQLite ke liye (testing/dev mein easy)
npm install @nestjs/typeorm typeorm sqlite3`,
        language: "bash",
      },
      {
        heading: "Database setup karo",
        content: ``,
        code: `// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Database connection
    TypeOrmModule.forRoot({
      type: 'postgres',        // ya 'sqlite', 'mysql'
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,   // Development mein true rakho (auto schema update)
      // Production mein synchronize: false karo!
    }),
    UsersModule,
  ],
})
export class AppModule {}`,
        language: "typescript",
      },
      {
        heading: "Entity banao — Database table define karo",
        content: `Entity = Database table. Har entity class ek database table represent karti hai.`,
        code: `// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')  // table ka naam
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })  // unique email
  email: string;

  @Column({ nullable: true })  // optional field
  age: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()  // automatic timestamp
  createdAt: Date;
}`,
        language: "typescript",
      },
      {
        heading: "Repository use karo service mein",
        content: ``,
        code: `// src/users/users.module.ts mein entity register karo
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // entity register karo
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// src/users/users.service.ts
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // inject repository
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(\`User #\${id} nahi mila\`);
    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    await this.usersRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}`,
        language: "typescript",
        tip: "Repository ek ready-made helper hai jo database operations provide karta hai — find, save, update, delete sab kuch. Khud SQL nahi likhna padta!",
      },
    ],
  },
  {
    id: "guards",
    title: "Guards & Authentication — Security",
    emoji: "🔒",
    sections: [
      {
        heading: "Guard kya hota hai?",
        content: `Guard decide karta hai ki koi request aage jaayegi ya nahi. Socho ek bouncer ki tarah — agar valid token hai toh andar jao, warna bahar.

**Common Use Cases:**
- JWT authentication check karna
- Role-based access (admin only routes)
- API key validation`,
        code: `# JWT ke liye install karo
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt`,
        language: "bash",
      },
      {
        heading: "JWT Auth Guard banao",
        content: ``,
        code: `// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    
    if (!token) {
      throw new UnauthorizedException('Token nahi mila — pehle login karo');
    }
    
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'YOUR_SECRET_KEY' // env variable se lo production mein
      });
      request['user'] = payload; // user info attach karo request mein
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
    
    return true;
  }

  private extractToken(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}

// Controller mein use karo:
import { UseGuards } from '@nestjs/common';

@Controller('users')
@UseGuards(AuthGuard) // poore controller par apply
export class UsersController {

  @Get('profile')
  // ya sirf ek route par:
  // @UseGuards(AuthGuard)
  getProfile(@Req() req: any) {
    return req.user;
  }
}`,
        language: "typescript",
        tip: "@UseGuards() kisi bhi route ya poore controller par laga sakte ho. Global guard ke liye app.useGlobalGuards() use karo.",
      },
    ],
  },
  {
    id: "middleware",
    title: "Middleware, Pipes & Interceptors",
    emoji: "🔧",
    sections: [
      {
        heading: "Middleware — Request processing",
        content: `Middleware request aur response ke beech mein kaam karta hai. Logging, authentication check, request modification yahan hoti hai.`,
        code: `// src/common/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    next(); // aage jaane do
  }
}

// Module mein apply karo:
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({...})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // sab routes par lagao
  }
}`,
        language: "typescript",
      },
      {
        heading: "Custom Pipe — Data transform karo",
        content: `Pipe data validate ya transform karta hai controller se pehle.`,
        code: `// src/common/parse-int.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException(\`'\${value}' ek valid number nahi hai\`);
    }
    return val;
  }
}

// Controller mein use karo:
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // ab id automatically number hoga
  return this.usersService.findOne(id);
}`,
        language: "typescript",
      },
      {
        heading: "Interceptor — Response transform karo",
        content: `Interceptor response ko modify kar sakta hai ya execution time log kar sakta hai.`,
        code: `// src/common/transform.interceptor.ts
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
      map(data => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}

// Globally apply karo main.ts mein:
app.useGlobalInterceptors(new TransformInterceptor());

// Ab har response aisa aayega:
// {
//   "success": true,
//   "data": { ... },
//   "timestamp": "2024-01-01T00:00:00.000Z"
// }`,
        language: "typescript",
        tip: "Interceptors bohot powerful hain — logging, caching, response transformation sab ke liye use hote hain.",
      },
    ],
  },
  {
    id: "config",
    title: "Environment Config — Secret values",
    emoji: "🔑",
    sections: [
      {
        heading: "Config Module setup karo",
        content: `Production mein database password, JWT secret jaise values code mein hardcode nahi karte — .env file mein rakhte hain.`,
        code: `# Config module install karo
npm install @nestjs/config

# .env file banao (root folder mein)
# cat .env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=secret
JWT_SECRET=my-super-secret-key
PORT=3000`,
        language: "bash",
      },
      {
        heading: "Config use karo",
        content: ``,
        code: `// app.module.ts mein ConfigModule add karo
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // poori app mein available ho
      envFilePath: '.env',
    }),
    // ...
  ],
})
export class AppModule {}

// Kisi bhi service mein use karo:
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
  
  getDatabaseHost(): string {
    return this.configService.get('DATABASE_HOST', 'localhost'); // default value bhi de sakte ho
  }
}

// main.ts mein:
const port = app.get(ConfigService).get('PORT') || 3000;
await app.listen(port);`,
        language: "typescript",
        tip: ".env file ko .gitignore mein zarur add karo! Yeh file kabhi bhi GitHub par push nahi honi chahiye.",
      },
    ],
  },
  {
    id: "testing",
    title: "Testing — Code test karo",
    emoji: "🧪",
    sections: [
      {
        heading: "Unit Testing — Service test karo",
        content: `NestJS mein Jest pehle se configured hota hai. Unit tests mein ek service/function ko isolated mein test karte hain.`,
        code: `// src/users/users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('service defined hona chahiye', () => {
    expect(service).toBeDefined();
  });

  it('saare users return karne chahiye', () => {
    const users = service.findAll();
    expect(users).toBeInstanceOf(Array);
  });

  it('ek user return karna chahiye', () => {
    const user = service.findOne(1);
    expect(user).toBeDefined();
    expect(user.id).toBe(1);
  });

  it('user na mile toh error aana chahiye', () => {
    expect(() => service.findOne(999)).toThrow();
  });
});`,
        language: "typescript",
      },
      {
        heading: "E2E Testing — Full flow test karo",
        content: `E2E (End-to-End) test mein actual HTTP requests bhejte hain aur full flow test karte hain.`,
        code: `// test/app.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Users (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /users — sab users milne chahiye', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  it('POST /users — naya user banna chahiye', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ name: 'Test User', email: 'test@test.com' })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});

// Tests chalane ke commands:
// npm run test          -- unit tests
// npm run test:watch    -- watch mode
// npm run test:e2e      -- end-to-end tests
// npm run test:cov      -- coverage report`,
        language: "typescript",
        tip: "Pehle unit tests likho, phir e2e. Coverage 80%+ rakhne ki koshish karo — isse production mein bugs kam aate hain.",
      },
    ],
  },
];
