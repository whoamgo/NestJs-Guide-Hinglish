export interface InterviewQ {
  id: number;
  question: string;
  answer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  code?: string;
}

export const interviewQuestions: InterviewQ[] = [
  {
    id: 1,
    level: "Beginner",
    question: "NestJS kya hai aur kyun use karte hain?",
    answer: `NestJS ek progressive Node.js framework hai jo TypeScript ke saath built hai. Yeh Angular se inspired hai isliye dono mein similar patterns milte hain — modules, decorators, dependency injection.

**Kyun use karte hain:**
- Code organized rehta hai (modular architecture)
- TypeScript support built-in hai — type safety milti hai
- Scalable applications banana easy hai
- Enterprise-level apps ke liye best choice
- Testing easy hoti hai (DI ki wajah se)
- Out-of-the-box features: validation, guards, interceptors, pipes`,
  },
  {
    id: 2,
    level: "Beginner",
    question: "Decorator kya hota hai NestJS mein? Example do.",
    answer: `Decorator ek special function hota hai jo class, method, ya property ke behavior ko modify karta hai. Yeh @ sign se start hota hai.

**Types of decorators:**
- @Module() — class ko module banata hai
- @Controller() — class ko controller banata hai
- @Injectable() — class ko injectable service banata hai
- @Get(), @Post(), @Put(), @Delete() — route methods
- @Body(), @Param(), @Query() — request data extract karna`,
    code: `@Controller('users')  // ye class ab controller hai
export class UsersController {

  @Get()           // GET /users
  findAll() { ... }

  @Get(':id')      // GET /users/123
  findOne(@Param('id') id: string) { ... }

  @Post()          // POST /users
  create(@Body() body: CreateUserDto) { ... }
}`,
  },
  {
    id: 3,
    level: "Beginner",
    question: "Dependency Injection kya hota hai? Simple example do.",
    answer: `Dependency Injection (DI) ek design pattern hai jisme tum objects ko khud create nahi karte — NestJS automatically provide karta hai.

**Bina DI ke (purana tarika):**
Controller mein khud new UsersService() likhna padta — isse tight coupling hoti hai, testing mushkil hoti hai.

**DI ke saath (NestJS ka tarika):**
Constructor mein declare karo, NestJS automatically inject kar deta hai. Testing mein mock service inject kar sakte ho.

**Fayda:** 
- Loose coupling — code aasani se change ho sakta hai
- Testing easy — mock objects inject kar sakte ho
- Code reuse — ek service multiple jagah use ho sakti hai`,
    code: `// Service define karo
@Injectable()
export class UsersService {
  findAll() { return []; }
}

// Controller mein inject karo — NestJS khud banayega
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService // inject!
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll(); // use karo
  }
}`,
  },
  {
    id: 4,
    level: "Beginner",
    question: "Module, Controller, aur Service ka kya relation hai?",
    answer: `Inhe ek restaurant ki tarah samjho:

**Module** = Restaurant building (sab kuch iske andar hota hai)
**Controller** = Waiter (customer se order leta hai, kitchen ko deta hai)  
**Service** = Chef (actual khana banata hai — business logic)

**Flow:** 
Request aati hai → Controller receive karta hai → Service ko deta hai → Service process karti hai → Response wapas bhejta hai Controller

Module mein dono (Controller + Service) register hote hain. Module ke bahar se koi seedha Service use nahi kar sakta jab tak Module export na kare.`,
  },
  {
    id: 5,
    level: "Beginner",
    question: "DTO kya hai aur kyun zaroori hai?",
    answer: `DTO = Data Transfer Object. Yeh ek class hai jo define karti hai ki API request mein kaun se fields aane chahiye aur unka format kya hoga.

**Kyun zaroori hai:**
1. **Validation** — galat data ko pehle hi rok lo
2. **Type Safety** — TypeScript types milte hain
3. **Documentation** — clearly pata chalta hai API ko kya chahiye
4. **Security** — unwanted fields automatically strip ho jaate hain (whitelist: true ke saath)

class-validator ke saath decorators use karte hain jaise @IsString(), @IsEmail(), @IsNotEmpty() etc.`,
    code: `export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  @Min(18)
  age?: number;
}`,
  },
  {
    id: 6,
    level: "Intermediate",
    question: "Guard aur Middleware mein kya difference hai?",
    answer: `Dono request ko intercept karte hain lekin purpose alag hai:

**Middleware:**
- Request modify kar sakta hai (headers, body)
- Generally logging, CORS, body parsing ke liye
- next() call karke aage bhejta hai
- Execution context (route handler) ki information nahi hoti
- Express-style function hai

**Guard:**
- Sirf authorize/deny karta hai (boolean return karta hai)
- Authentication, authorization ke liye
- ExecutionContext milta hai — route handler ki poori info available hoti hai
- @UseGuards() se apply karte hain
- Roles, permissions check karne ke liye best

**Simple rule:** Request transform/modify karna ho → Middleware. Authorize/block karna ho → Guard.`,
    code: `// Guard — true ya false return karo
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return !!request.headers.authorization; // true = aage jao
  }
}

// Middleware — next() call karo
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.url); // log karo
    next(); // aage bhejo
  }
}`,
  },
  {
    id: 7,
    level: "Intermediate",
    question: "Pipe kya hota hai? Built-in pipes kaunse hain?",
    answer: `Pipe controller se pehle data ko validate ya transform karta hai.

**Built-in Pipes:**
- **ParseIntPipe** — string ko integer mein convert karta hai
- **ParseBoolPipe** — string ko boolean mein convert karta hai
- **ParseUUIDPipe** — valid UUID check karta hai
- **ValidationPipe** — DTO validation ke liye (sabse zyada use hota hai)
- **DefaultValuePipe** — undefined values ke liye default value set karta hai
- **ParseArrayPipe** — comma-separated string ko array mein convert karta hai

**Use cases:**
- URL param '123' ko number mein convert karna
- Request body validate karna (DTO ke saath)
- Optional query param ka default value set karna`,
    code: `// Built-in pipes use karo
@Get(':id')
findOne(
  @Param('id', ParseIntPipe) id: number,
  // ab id string nahi, number hai
) { ... }

// Default value
@Get()
findAll(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
) { ... }
// page undefined ho toh automatically 1 ho jaayega`,
  },
  {
    id: 8,
    level: "Intermediate",
    question: "Interceptor kya hota hai? Kab use karte hain?",
    answer: `Interceptor AOP (Aspect-Oriented Programming) concept se aata hai. Yeh route handler ke before aur after dono mein kaam karta hai.

**Use cases:**
- **Response transform** — har response ko ek consistent format mein wrap karna
- **Logging** — request aur response ka time measure karna (performance)
- **Caching** — baar baar same data na fetch karo
- **Exception handling** — errors ko consistent format mein convert karna

**Controller se order:** 
Middleware → Guard → Interceptor (before) → Pipe → Controller → Interceptor (after)`,
    code: `@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const elapsed = Date.now() - start;
        console.log(\`Request ne \${elapsed}ms liya\`);
      }),
    );
  }
}`,
  },
  {
    id: 9,
    level: "Intermediate",
    question: "Exception Filter kya hota hai? Custom exception kaise banate hain?",
    answer: `Exception Filter unhandled errors ko catch karta hai aur user-friendly response bhejta hai. Default mein NestJS apna filter use karta hai, lekin custom filter se control milti hai.

**Built-in Exceptions:**
- NotFoundException (404)
- BadRequestException (400)
- UnauthorizedException (401)
- ForbiddenException (403)
- ConflictException (409)
- InternalServerErrorException (500)

**Custom filter** banake tum sab errors ek format mein send kar sakte ho.`,
    code: `// Custom exception filter
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json({
      success: false,
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}

// Global apply karo:
app.useGlobalFilters(new HttpExceptionFilter());`,
  },
  {
    id: 10,
    level: "Intermediate",
    question: "Lazy Loading Modules kya hota hai aur kab use karte hain?",
    answer: `Lazy Loading mein module tab load hota hai jab pehli baar use hota hai — app start pe nahi. Isse startup time fast hota hai.

**Kab use karo:**
- Rarely used features/modules
- Large applications jahan startup time important ho
- Serverless environments (AWS Lambda, etc.)

Normally NestJS mein sab modules eagerly load hote hain (app start pe). LazyModuleLoader inject karke on-demand load kar sakte ho.`,
    code: `import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async getHeavyFeature() {
    // Sirf tab load hoga jab call hoga
    const { HeavyModule } = await import('./heavy/heavy.module');
    const moduleRef = await this.lazyModuleLoader.load(() => HeavyModule);
    const heavyService = moduleRef.get(HeavyService);
    return heavyService.doSomething();
  }
}`,
  },
  {
    id: 11,
    level: "Advanced",
    question: "Custom Decorator kaise banate hain NestJS mein?",
    answer: `Custom decorators se aap repetitive code avoid kar sakte ho. Common use case hai current logged-in user ko request se nikalna.`,
    code: `// src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user; // auth guard ne attach kiya hoga
  },
);

// Controller mein use karo:
@Get('me')
@UseGuards(AuthGuard)
getMe(@CurrentUser() user: User) {
  // user automatically request se aayega
  return user;
}

// @Roles() decorator example:
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Use karo:
@Get('admin')
@Roles('admin', 'superadmin')
@UseGuards(AuthGuard, RolesGuard)
adminOnly() { ... }`,
  },
  {
    id: 12,
    level: "Advanced",
    question: "NestJS mein WebSockets kaise implement karte hain?",
    answer: `NestJS mein Gateways use karke WebSocket support add kar sakte ho. Yeh real-time features ke liye hai — chat apps, notifications, live updates.`,
    code: `# Install karo
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

// chat.gateway.ts
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  // Client se message receive karo
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    // Sab connected clients ko broadcast karo
    this.server.emit('message', message);
  }

  // Connection event
  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  // Disconnection event
  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }
}`,
  },
  {
    id: 13,
    level: "Advanced",
    question: "CQRS Pattern NestJS mein kaise implement karte hain?",
    answer: `CQRS = Command Query Responsibility Segregation. Iska matlab hai read operations (Queries) aur write operations (Commands) alag-alag handle karo.

**Kab use karo:**
- Complex domain logic ho
- Read aur write alag scale karna ho
- Event sourcing implement karni ho

NestJS mein @nestjs/cqrs package se implement karte hain.`,
    code: `npm install @nestjs/cqrs

// Command: write operation
export class CreateUserCommand {
  constructor(public readonly name: string, public readonly email: string) {}
}

// Command Handler
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand) {
    // user create karo database mein
    return { id: 1, ...command };
  }
}

// Query: read operation
export class GetUserQuery {
  constructor(public readonly id: number) {}
}

// Controller mein:
@Post()
async createUser(@Body() dto: CreateUserDto) {
  return this.commandBus.execute(new CreateUserCommand(dto.name, dto.email));
}

@Get(':id')
async getUser(@Param('id', ParseIntPipe) id: number) {
  return this.queryBus.execute(new GetUserQuery(id));
}`,
  },
  {
    id: 14,
    level: "Advanced",
    question: "NestJS application ko production ke liye kaise optimize karo?",
    answer: `Production mein performance aur security dono important hain:

**Performance:**
- Compression middleware add karo (gzip)
- Rate limiting lagao (throttler)
- Caching implement karo (Redis ke saath)
- Database queries optimize karo (indexes, eager loading avoid karo)
- Clustering ya PM2 se multiple processes chalao

**Security:**
- Helmet.js lagao (HTTP headers secure karo)
- CORS properly configure karo
- Rate limiting (brute force attacks se bachao)
- Input validation harjaah (DTO + ValidationPipe)
- JWT secrets strong rakho, env variables mein
- synchronize: false karo TypeORM mein
- SQL injection se bachao (parameterized queries)

**Monitoring:**
- Health check endpoints banao
- Structured logging use karo (Pino/Winston)
- Metrics expose karo (Prometheus ke liye)`,
    code: `// main.ts — production setup
import * as compression from 'compression';
import helmet from 'helmet';
import { ThrottlerModule } from '@nestjs/throttler';

// Middleware
app.use(helmet());
app.use(compression());

// Rate limiting (100 requests per minute)
@Module({
  imports: [
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
  ],
})

// Health check
import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }
}`,
  },
  {
    id: 15,
    level: "Beginner",
    question: "NestJS mein error handling kaise karte hain?",
    answer: `NestJS mein errors handle karne ke 3 tarike hain:

**1. Built-in exceptions throw karo:**
Directly service/controller mein throw karo — NestJS automatically sahi HTTP response bhejega.

**2. Custom Exception banao:**
HttpException extend karke apni exception class banao.

**3. Exception Filter:**
Ek jagah sab errors catch karo aur consistent format mein bhejo.

**Best Practice:** Service mein business logic validation karo aur exceptions throw karo. Controller ko try-catch ki zarurat nahi — NestJS handle kar leta hai.`,
    code: `// Built-in exceptions — seedha throw karo
throw new NotFoundException('User nahi mila');
throw new BadRequestException('Email pehle se exist karta hai');
throw new UnauthorizedException('Pehle login karo');
throw new ForbiddenException('Yeh kaam karne ki permission nahi hai');

// Custom exception
export class UserAlreadyExistsException extends ConflictException {
  constructor(email: string) {
    super(\`Email '\${email}' pehle se registered hai\`);
  }
}

// Use karo:
if (existingUser) {
  throw new UserAlreadyExistsException(email);
}`,
  },
  {
    id: 16,
    level: "Intermediate",
    question: "NestJS mein Swagger documentation kaise setup karte hain?",
    answer: `Swagger se automatic API documentation generate hoti hai. Developers aur frontend team ko API easily samajh aata hai.`,
    code: `# Install karo
npm install @nestjs/swagger swagger-ui-express

// main.ts mein setup karo
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('My API')
  .setDescription('Meri API ki documentation')
  .setVersion('1.0')
  .addBearerAuth() // JWT auth ka badge add karo
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);
// Ab http://localhost:3000/api-docs par documentation milegi

// DTO mein Swagger decorators add karo:
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Rahul Kumar', description: 'User ka naam' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'rahul@example.com' })
  @IsEmail()
  email: string;
}`,
  },
];
