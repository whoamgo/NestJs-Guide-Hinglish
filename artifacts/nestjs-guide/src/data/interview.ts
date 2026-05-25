export interface InterviewQ {
  id: number;
  question: string;
  answer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  code?: string;
  tags?: string[];
}

export const interviewQuestions: InterviewQ[] = [
  {
    id: 1,
    level: "Beginner",
    tags: ["basics", "architecture"],
    question: "NestJS kya hai aur kyun use karte hain? Express se better kyun hai?",
    answer: `NestJS ek progressive Node.js framework hai jo TypeScript ke saath built hai aur Angular se inspired hai.

**Express vs NestJS:**
- Express: Minimal, flexible, koi structure nahi — aap khud sab decide karo
- NestJS: Opinionated structure, built-in DI, modules, pipes, guards — sab ready

**NestJS ke fayde:**
- **Modular architecture** — code organized rehta hai
- **TypeScript first** — type safety
- **Dependency Injection** — loose coupling, easy testing
- **Decorators** — clean, readable code
- **Built-in features** — validation, guards, interceptors, pipes
- **Scalable** — small se large apps tak
- **Testing** — DI ki wajah se mocking easy`,
  },
  {
    id: 2,
    level: "Beginner",
    tags: ["decorators"],
    question: "Decorator kya hota hai? NestJS mein important decorators kaunse hain?",
    answer: `Decorator ek special function hai jo class, method, ya property ke behavior ko modify karta hai. TypeScript feature hai, @ sign se likhte hain.

**Class Decorators:**
- @Module() — class ko module banata hai
- @Controller('path') — class ko controller
- @Injectable() — DI mein register karo

**Method Decorators:**
- @Get(), @Post(), @Put(), @Patch(), @Delete()
- @HttpCode(201) — custom status code

**Parameter Decorators:**
- @Body() — request body
- @Param('id') — URL parameter
- @Query('page') — query string
- @Headers() — request headers
- @Req() / @Res() — raw Express objects

**Custom Decorators:**
- @CurrentUser() — logged-in user
- @Roles('admin') — role-based access`,
    code: `@Controller('users')          // class decorator
export class UsersController {
  
  @Get(':id')               // method decorator
  findOne(
    @Param('id') id: string  // parameter decorator
  ) {
    return { id };
  }
}`,
  },
  {
    id: 3,
    level: "Beginner",
    tags: ["di", "architecture"],
    question: "Dependency Injection kya hai? NestJS mein kaise kaam karta hai?",
    answer: `DI ek design pattern hai — objects khud nahi banate, koi aur (container) banake deta hai.

**Bina DI ke:**
Controller mein new UsersService() — tight coupling, test mein real service chalti.

**DI ke saath:**
Constructor mein declare karo, NestJS IoC container automatically instance banake inject karta hai.

**Fayde:**
1. **Loose coupling** — UsersController, UsersService implementation pe depend nahi karta
2. **Testing** — real service ki jagah mock inject kar sakte ho
3. **Reuse** — ek service instance multiple controllers share kar sakte hain (singleton by default)
4. **Flexibility** — implementation swap karna easy

**Scopes:**
- DEFAULT (singleton) — ek instance poori app mein
- REQUEST — har request ke liye naya instance
- TRANSIENT — har injection pe naya instance`,
    code: `// Service
@Injectable()
export class UsersService {
  findAll() { return []; }
}

// Controller — NestJS inject karta hai automatically
@Controller()
export class UsersController {
  constructor(
    private usersService: UsersService  // inject!
  ) {}
}

// Test mein mock inject karo:
const mockService = { findAll: jest.fn().mockReturnValue([]) };
// Real database queries nahi chalti testing mein!`,
  },
  {
    id: 4,
    level: "Beginner",
    tags: ["basics"],
    question: "Module, Controller, aur Service mein kya fark hai?",
    answer: `**Module** = Container (building)
Poore feature ko organize karta hai. Controllers, Services register karta hai. Doosre modules import/export karta hai.

**Controller** = Receptionist
HTTP requests receive karta hai. Routes define karta hai. Service ko call karta hai. Thin rakho — logic mat likho yahan.

**Service** = Worker
Actual business logic. Database operations. Complex calculations. Reusable across controllers.

**Flow:**
Request → Controller (route match) → Service (logic) → Response

**Real example:**
UsersModule mein UsersController aur UsersService hai. Controller GET /users request leta hai, UsersService.findAll() call karta hai, result return karta hai.`,
  },
  {
    id: 5,
    level: "Beginner",
    tags: ["validation", "dto"],
    question: "DTO kya hai? ValidationPipe kaise kaam karta hai?",
    answer: `DTO = Data Transfer Object. API mein request data ka shape define karta hai.

**Kyun zaroori:**
1. Input validate karo (email valid hai? name empty nahi?)
2. Type safety (TypeScript knows what fields expect karo)
3. Security (extra fields strip ho jayein)
4. Documentation (API contract clear ho)

**ValidationPipe ka flow:**
1. Request aati hai body ke saath
2. ValidationPipe body ko DTO class mein convert karta hai (class-transformer)
3. class-validator se decorators validate karta hai
4. Invalid ho toh 400 BadRequest throw karta hai
5. Valid ho toh controller ko deta hai

**Important options:**
- whitelist: true — extra fields remove
- forbidNonWhitelisted: true — extra fields pe error
- transform: true — auto type conversion`,
    code: `export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;      // required string, min 2 chars

  @IsEmail()
  email: string;     // valid email required

  @IsOptional()
  @IsInt()
  @Min(18)
  age?: number;      // optional, min 18
}

// Invalid request body bhejo:
// { "name": "A", "email": "not-email" }
// → 400 Bad Request automatically!`,
  },
  {
    id: 6,
    level: "Beginner",
    tags: ["errors"],
    question: "NestJS mein built-in exceptions kaunse hain? Custom exception kaise banate hain?",
    answer: `**Built-in HTTP Exceptions:**
- BadRequestException (400) — invalid input
- UnauthorizedException (401) — login required
- ForbiddenException (403) — permission nahi
- NotFoundException (404) — resource nahi mila
- ConflictException (409) — duplicate data
- UnprocessableEntityException (422) — valid format but semantic error
- InternalServerErrorException (500) — server error
- ServiceUnavailableException (503) — service down

**Custom Exception:**
HttpException extend karo:`,
    code: `// Custom exception
export class EmailAlreadyExistsException extends ConflictException {
  constructor(email: string) {
    super(\`'\${email}' pehle se registered hai\`);
  }
}

// Use karo:
throw new EmailAlreadyExistsException(dto.email);

// Response aayega:
// { statusCode: 409, message: "'x@x.com' pehle se registered hai" }`,
  },
  {
    id: 7,
    level: "Beginner",
    tags: ["lifecycle"],
    question: "NestJS application lifecycle hooks kya hote hain?",
    answer: `NestJS mein application ke different phases mein hooks available hain:

**Startup Hooks (bootstrap mein):**
1. **onModuleInit()** — module sab providers resolve kar le phir
2. **onApplicationBootstrap()** — sab modules init ho gaye phir

**Shutdown Hooks:**
3. **onModuleDestroy()** — app close hone se pehle
4. **beforeApplicationShutdown(signal)** — process signal mila
5. **onApplicationShutdown(signal)** — shutdown complete

**Kab use karein:**
- Database connection establish karo onModuleInit() mein
- Background jobs start karo onApplicationBootstrap() mein
- Connections gracefully close karo onApplicationShutdown() mein
- Cache clear karo onModuleDestroy() mein`,
    code: `@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  
  async onModuleInit() {
    await this.connect(); // startup pe connect karo
    console.log('Database connected!');
  }

  async onApplicationShutdown(signal: string) {
    await this.disconnect(); // cleanup
    console.log(\`Shutting down on signal: \${signal}\`);
  }
}

// main.ts mein shutdown hooks enable karo:
app.enableShutdownHooks();`,
  },
  {
    id: 8,
    level: "Intermediate",
    tags: ["guards", "auth"],
    question: "Guard aur Middleware mein kya difference hai? Kab kaunsa use karein?",
    answer: `**Middleware:**
- Express-style function (req, res, next)
- Route handler ki koi knowledge nahi
- Mainly: logging, CORS, body parsing, request modification
- Class ya functional dono ho sakta hai
- next() call karna padta hai manually

**Guard:**
- CanActivate interface implement karta hai
- ExecutionContext milta hai — route handler, class, metadata sab available
- Sirf boolean return karta hai (allow/deny)
- @UseGuards() se apply, ya global
- Roles, permissions, JWT validation ke liye

**Simple rule:**
- Request/response modify karna → Middleware
- Access control (allow/deny) → Guard
- Route metadata padhni ho → Guard (Reflector se)

**Order:** Middleware → Guard → Interceptor → Pipe → Controller`,
    code: `// Middleware (request modify)
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    next(); // manually call karo
  }
}

// Guard (access control)
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    return req.user?.role === 'admin'; // boolean return karo
  }
}`,
  },
  {
    id: 9,
    level: "Intermediate",
    tags: ["interceptors"],
    question: "Interceptor kya karta hai? RxJS ka role kya hai?",
    answer: `Interceptor AOP (Aspect-Oriented Programming) concept hai. Route handler ke before aur after dono mein kaam karta hai.

**Use cases:**
1. **Response transform** — consistent format mein wrap karo
2. **Timing/Logging** — execution time measure karo
3. **Caching** — response cache karo
4. **Error mapping** — exceptions ko transform karo

**RxJS ka role:**
NestJS mein controllers Observables return kar sakte hain. Interceptors RxJS operators (map, tap, catchError) use karke Observable stream transform karte hain.

**pipe(map(data => ...))** — response data transform karo
**pipe(tap(() => ...))** — side effects (logging)
**pipe(catchError(...))** — errors handle karo`,
    code: `@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();

    return next.handle().pipe(
      map(data => ({           // response wrap karo
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
      tap(() => {              // side effect — logging
        console.log(\`\${Date.now() - start}ms\`);
      }),
      catchError(err => {      // error handle karo
        return throwError(() => new HttpException(err.message, 500));
      }),
    );
  }
}`,
  },
  {
    id: 10,
    level: "Intermediate",
    tags: ["pipes"],
    question: "Pipe kya hota hai? Built-in aur custom pipes explain karo.",
    answer: `Pipe controller execution se pehle data validate ya transform karta hai.

**Two purposes:**
1. **Transformation** — input ko desired format mein convert karo
2. **Validation** — input valid na ho toh exception throw karo

**Built-in Pipes:**
- ParseIntPipe — string to integer
- ParseBoolPipe — string to boolean
- ParseUUIDPipe — valid UUID check
- ParseArrayPipe — array parsing
- ValidationPipe — DTO validation (sabse important)
- DefaultValuePipe — undefined ke liye default value

**Apply karne ke levels:**
- Parameter level: @Param('id', ParseIntPipe)
- Route level: @UsePipes(ValidationPipe)
- Controller level: @UsePipes(ValidationPipe)
- Global level: app.useGlobalPipes()`,
    code: `// Parameter level
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  // id ab string nahi, number hai guaranteed
}

// Query with default
@Get()
findAll(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
) {}

// Custom Pipe
@Injectable()
export class TrimStringPipe implements PipeTransform {
  transform(value: any) {
    return typeof value === 'string' ? value.trim() : value;
  }
}`,
  },
  {
    id: 11,
    level: "Intermediate",
    tags: ["database", "typeorm"],
    question: "TypeORM mein Entity Relationships kaise define karte hain?",
    answer: `TypeORM mein 4 types ke relationships hote hain:

**1. OneToOne** — Ek user ka ek profile (1:1)
**2. OneToMany** — Ek user ke many posts (1:N)
**3. ManyToOne** — Many posts ka ek user (N:1)
**4. ManyToMany** — Many students, many courses (N:N)

**Eager vs Lazy Loading:**
- eager: true — automatically load (query hit badh sakti hai)
- Default = lazy — explicitly load karo

**Cascading:**
- cascade: true — related entities bhi save/delete ho
- Carefully use karo — unintended deletes ho sakte hain`,
    code: `// User <-> Profile (OneToOne)
@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  
  @OneToOne(() => Profile, profile => profile.user, { cascade: true })
  @JoinColumn() // foreign key yahan
  profile: Profile;
}

// User <-> Posts (OneToMany / ManyToOne)
@Entity()
export class Post {
  @PrimaryGeneratedColumn() id: number;
  
  @ManyToOne(() => User, user => user.posts)
  user: User;
}

@Entity()
export class User {
  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}

// Load with relations:
await userRepo.findOne({
  where: { id: 1 },
  relations: ['posts', 'profile'], // explicit load
});`,
  },
  {
    id: 12,
    level: "Intermediate",
    tags: ["auth", "jwt"],
    question: "JWT (JSON Web Token) internally kaise kaam karta hai?",
    answer: `JWT ek stateless authentication mechanism hai. Server kuch store nahi karta — token mein sab hota hai.

**JWT Structure:**
Header.Payload.Signature — teeno base64 encoded, dot se separated

**Header:** Algorithm info (HS256)
**Payload:** Claims (user ID, email, role, exp)
**Signature:** HMAC(base64(header) + "." + base64(payload), secret)

**Verify process:**
Server token receive karta hai → signature recalculate karta hai → agar match toh valid

**Access Token vs Refresh Token:**
- Access Token: short-lived (15min-1hr), API requests ke liye
- Refresh Token: long-lived (7-30 days), naya access token lene ke liye

**Security notes:**
- Secret key strong rakho (32+ chars)
- HTTPS use karo
- Sensitive data payload mein mat rakho (decodable hai!)
- Expiry hamesha set karo`,
    code: `// JWT structure (decoded):
// Header:  { "alg": "HS256", "typ": "JWT" }
// Payload: { "sub": 1, "email": "a@a.com", "role": "user", "iat": 1700000000, "exp": 1700086400 }
// Signature: HMAC_SHA256(base64url(header) + "." + base64url(payload), SECRET)

// Token banao:
const token = jwtService.sign({ 
  sub: user.id,
  email: user.email,
  role: user.role
});

// Verify karo:
const payload = jwtService.verify(token); // throws if invalid/expired

// Payload decode karo (verify nahi):
const decoded = jwtService.decode(token); // unsafe, no verification`,
  },
  {
    id: 13,
    level: "Intermediate",
    tags: ["swagger"],
    question: "Swagger documentation NestJS mein kaise setup karte hain?",
    answer: `@nestjs/swagger package se automatically API docs generate hoti hain.

**Setup steps:**
1. Package install karo
2. main.ts mein DocumentBuilder se config banao
3. SwaggerModule.setup() se UI mount karo
4. DTOs mein @ApiProperty() lagao
5. Controllers mein @ApiTags(), @ApiOperation() lagao

**Fayde:**
- Manual documentation nahi likhni
- Interactive UI — directly APIs test karo
- JWT token bhi test kar sakte ho Swagger mein
- Client SDK generate ho sakta hai`,
    code: `// main.ts
const config = new DocumentBuilder()
  .setTitle('My API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

const doc = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, doc);

// DTO mein
export class CreateUserDto {
  @ApiProperty({ example: 'Rahul', description: 'User name' })
  @IsString()
  name: string;
}

// Controller mein
@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  findAll() { ... }
}

// URL: http://localhost:3000/api-docs`,
  },
  {
    id: 14,
    level: "Intermediate",
    tags: ["config"],
    question: "NestJS mein environment variables kaise manage karte hain?",
    answer: `@nestjs/config package se environment variables safely manage karo.

**Best Practices:**
1. .env file mein secret values rakho
2. .env.example file banao (actual values nahi, sirf keys)
3. .gitignore mein .env add karo
4. App start pe validation karo (sab required vars hain?)
5. ConfigService se access karo — process.env directly mat use karo
6. Production mein environment variables directly set karo (Heroku/AWS)

**getOrThrow() vs get():**
- get('KEY') → value ya undefined
- getOrThrow('KEY') → value ya exception (safer!)

**Typed config:**
load: [configFactory] se nested, typed config objects banao`,
    code: `// ConfigModule setup
ConfigModule.forRoot({
  isGlobal: true,
  validate: validateConfig, // startup validation
})

// Service mein use karo
@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getPort(): number {
    return this.config.get<number>('PORT', 3000);
  }

  getJwtSecret(): string {
    return this.config.getOrThrow('JWT_SECRET'); // undefined nahi hoga
  }
}

// .env.example (Git mein commit karo):
# PORT=3000
# DATABASE_URL=postgresql://user:pass@host/db
# JWT_SECRET=your-secret-here`,
  },
  {
    id: 15,
    level: "Intermediate",
    tags: ["testing"],
    question: "NestJS mein unit testing kaise karte hain? Mocking kya hai?",
    answer: `Unit testing mein ek service/class ko isolated mein test karte hain — baaki sab mock kar dete hain.

**Mocking kya hai:**
Real dependencies (database, external APIs) ki jagah fake objects use karo jo expected values return karein.

**Test.createTestingModule():**
NestJS ka testing utility — real NestJS module ki tarah kaam karta hai lekin mocks inject kar sakte ho.

**Jest mocks:**
- jest.fn() — mock function
- mockReturnValue() — sync mock
- mockResolvedValue() — async mock (Promise)
- mockRejectedValue() — error simulate

**What to test:**
- Happy path — normal cases
- Edge cases — empty arrays, null values
- Error cases — NotFoundException, ConflictException
- Business logic — calculations, validations`,
    code: `describe('UsersService', () => {
  let service: UsersService;
  let mockRepo = {
    findOne: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        { 
          provide: getRepositoryToken(User), 
          useValue: mockRepo  // real DB ki jagah mock!
        },
      ],
    }).compile();

    service = module.get(UsersService);
  });

  it('should throw when user not found', async () => {
    mockRepo.findOne.mockResolvedValue(null);
    
    await expect(service.findOne(999))
      .rejects.toThrow(NotFoundException);
  });
});`,
  },
  {
    id: 16,
    level: "Advanced",
    tags: ["custom-decorators"],
    question: "Custom Decorator kaise banate hain? Real-world example do.",
    answer: `Custom decorators se repetitive code avoid hota hai aur code readable hota hai.

**Types:**
1. **Param decorator** — @CurrentUser(), @AuthUser()
2. **Class/Method decorator** — @Roles(), @Public()
3. **Property decorator** — usually kum use hota hai

**createParamDecorator:**
ExecutionContext se request access karo aur data extract karo.

**SetMetadata:**
Metadata store karo jise Guards/Interceptors Reflector se padh sakein.`,
    code: `// @CurrentUser() — logged-in user easily access karo
export const CurrentUser = createParamDecorator(
  (field: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return field ? user?.[field] : user; // specific field ya poora user
  },
);

// Usage:
@Get('me')
@UseGuards(JwtAuthGuard)
getMe(
  @CurrentUser() user: User,           // poora user
  // ya:
  @CurrentUser('email') email: string, // sirf email
) {
  return user;
}

// @Roles() — SetMetadata + Guard
export const Roles = (...roles: string[]) => 
  SetMetadata('roles', roles);

// @Public() — JWT bypass
export const Public = () => SetMetadata('isPublic', true);

// @ApiController() — multiple decorators combine
export const ApiController = (prefix: string) =>
  applyDecorators(
    Controller(prefix),
    UseGuards(JwtAuthGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );`,
  },
  {
    id: 17,
    level: "Advanced",
    tags: ["websockets"],
    question: "NestJS mein WebSockets kaise implement karte hain?",
    answer: `NestJS mein @WebSocketGateway() decorator se WebSocket server banate hain. Real-time features ke liye — chat, notifications, live updates.

**Gateway = WebSocket Controller:**
Controller ki tarah kaam karta hai lekin HTTP ki jagah WebSocket events handle karta hai.

**@SubscribeMessage()** — specific event pe handler
**@WebSocketServer()** — server instance inject
**server.emit()** — sab clients ko broadcast
**client.emit()** — specific client ko message

**Kab use karein:**
- Real-time chat
- Live notifications
- Collaborative editing
- Live sports scores/stock prices
- Multiplayer games`,
    code: `// npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat', // optional namespace
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedUsers = new Map<string, string>();

  handleConnection(client: Socket) {
    console.log(\`Connected: \${client.id}\`);
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers.delete(client.id);
    this.server.emit('user-left', client.id);
  }

  @SubscribeMessage('join-room')
  handleJoin(client: Socket, @MessageBody() data: { room: string; username: string }) {
    client.join(data.room);
    this.connectedUsers.set(client.id, data.username);
    client.to(data.room).emit('user-joined', data.username);
    return { event: 'joined', data: \`Room '\${data.room}' mein aa gaye!\` };
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, @MessageBody() data: { room: string; message: string }) {
    const username = this.connectedUsers.get(client.id);
    this.server.to(data.room).emit('message', { username, message: data.message });
  }
}`,
  },
  {
    id: 18,
    level: "Advanced",
    tags: ["caching", "performance"],
    question: "NestJS mein Caching kaise implement karte hain? Redis kyun better hai?",
    answer: `Caching mein frequently used data memory mein store karte hain — database queries reduce hoti hain, speed badhti hai.

**In-memory Cache (default):**
- App memory mein
- Simple, no setup
- App restart pe clear
- Single server ke liye

**Redis Cache (production):**
- Separate server
- Persist restarts
- Multiple app instances share kar sakte hain (distributed)
- TTL (Time To Live) support
- More features — sorted sets, pub/sub

**Cache Invalidation Strategies:**
1. TTL based — automatically expire
2. Event based — data change pe manually delete
3. Tag based — related items ek saath invalidate`,
    code: `// Service mein manual caching
@Injectable()
export class ProductsService {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    const KEY = 'products:all';
    
    // Cache hit check
    const cached = await this.cache.get<Product[]>(KEY);
    if (cached) return cached;
    
    // Cache miss — DB se lo
    const products = await this.productRepo.find();
    
    // 5 min ke liye cache karo
    await this.cache.set(KEY, products, 5 * 60 * 1000);
    
    return products;
  }

  async update(id: number, dto: any) {
    await this.productRepo.update(id, dto);
    // Cache invalidate karo!
    await this.cache.del('products:all');
    await this.cache.del(\`products:\${id}\`);
  }
}`,
  },
  {
    id: 19,
    level: "Advanced",
    tags: ["microservices"],
    question: "Microservices architecture kya hai? NestJS mein kab use karein?",
    answer: `Microservices = Application ko independent, separately deployable services mein todna.

**Monolith vs Microservices:**
- Monolith: Simple, easy deploy, scale hard (sab ek saath scale hota hai)
- Microservices: Complex, independent scale, team isolation possible

**NestJS Microservices:**
HTTP ki jagah message patterns use karo (@MessagePattern). Services TCP, Redis, NATS, Kafka, RabbitMQ se communicate karte hain.

**Kab microservices use karein:**
- Different features ko alag team handle kare
- Different parts ko alag scale karna ho
- Different technologies use karni ho
- Fault isolation chahiye

**Kab MAT karo:**
- Small team (5 se kam)
- MVP stage
- Simple CRUD app
- Prematurely — "microservices se shuruaat" avoid karo!`,
    code: `// Microservice (users-service)
NestFactory.createMicroservice(AppModule, {
  transport: Transport.TCP,
  options: { port: 3001 },
});

// Message handler
@MessagePattern({ cmd: 'get_user' })
getUser(@Payload() data: { id: number }) {
  return this.usersService.findOne(data.id);
}

// API Gateway (main app)
@Module({
  imports: [ClientsModule.register([{
    name: 'USERS_SERVICE',
    transport: Transport.TCP,
    options: { port: 3001 },
  }])],
})

// Gateway controller
@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.client.send({ cmd: 'get_user' }, { id: +id });
    // Returns Observable — NestJS handles it
  }
}`,
  },
  {
    id: 20,
    level: "Advanced",
    tags: ["performance", "deployment"],
    question: "NestJS production ke liye kaise optimize karein? Performance tips kya hain?",
    answer: `**Security:**
- helmet() — HTTP security headers
- HTTPS only
- Rate limiting (ThrottlerModule)
- Input validation everywhere
- Environment variables for secrets
- CORS restrict karo specific origins pe

**Performance:**
- compression() — gzip response
- Caching (Redis)
- Database connection pooling
- Pagination — sab data ek baar mat bhejo
- Database indexes
- SELECT specific columns (select: ['id', 'name'])
- Avoid N+1 queries (relations carefully load karo)

**Reliability:**
- Graceful shutdown (enableShutdownHooks)
- Health checks (/health endpoint)
- Structured logging (Winston/Pino)
- Error monitoring (Sentry)
- PM2 ya Kubernetes se process management

**Monitoring:**
- Response time tracking (interceptors se)
- Database query time
- Memory usage
- Error rate`,
    code: `// main.ts — production ready
app.use(helmet());
app.use(compression());
app.enableCors({ origin: process.env.FRONTEND_URL });
app.enableShutdownHooks();
app.useGlobalPipes(new ValidationPipe({ 
  whitelist: true, 
  transform: true 
}));

// Health check
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}

// Rate limiting
ThrottlerModule.forRoot([{ 
  ttl: 60000, 
  limit: 100  // 100 req/min 
}])`,
  },
  {
    id: 21,
    level: "Advanced",
    tags: ["patterns"],
    question: "Repository Pattern aur Service Layer pattern kya hai NestJS mein?",
    answer: `**Repository Pattern:**
Database operations ko abstract karo. Service seedha database se baat nahi karta — Repository se karta hai.

**Fayde:**
- Database change karna easy ho jaata hai
- Testing mein repository mock kar sakte ho
- Database logic aur business logic alag

**Service Layer Pattern:**
Service sirf business logic karta hai — HTTP ka koi knowledge nahi, database ka koi direct access nahi.

**Clean Architecture Layers:**
Controller (HTTP) → Service (Business Logic) → Repository (Data Access) → Database

**NestJS mein:**
TypeORM ka Repository already available hai. Custom repository banao additional methods ke liye.`,
    code: `// Custom Repository
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async findActiveUsers(page: number, limit: number) {
    return this.repo.findAndCount({
      where: { isActive: true },
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
  }

  async findWithPosts(userId: number) {
    return this.repo.findOne({
      where: { id: userId },
      relations: ['posts'],
    });
  }
}

// Service mein use karo
@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getActivePage(page: number) {
    const [users, total] = await this.usersRepository.findActiveUsers(page, 10);
    return { users, total };
  }
}`,
  },
  {
    id: 22,
    level: "Advanced",
    tags: ["events"],
    question: "Event-driven architecture NestJS mein kaise implement karein?",
    answer: `Events se loose coupling milti hai — service directly doosri service ko call nahi karta, event emit karta hai.

**@nestjs/event-emitter:**
Same process mein event-driven communication.

**Fayde:**
- Services independent rehti hain
- New features add karo without existing code change
- Async processing (email bhejne ke liye wait nahi karna)

**Usecases:**
- User register → welcome email bhejo
- Order placed → inventory update, email bhejo, analytics
- Payment success → order confirm, receipt email`,
    code: `// npm install @nestjs/event-emitter

// app.module.ts
EventEmitterModule.forRoot()

// Event class define karo
export class UserCreatedEvent {
  constructor(
    public readonly userId: number,
    public readonly email: string,
    public readonly name: string,
  ) {}
}

// Service mein emit karo
@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  async create(dto: CreateUserDto) {
    const user = await this.save(dto);
    
    // Event emit karo — fire and forget
    this.eventEmitter.emit(
      'user.created',
      new UserCreatedEvent(user.id, user.email, user.name),
    );
    
    return user;
  }
}

// Event listener (alag service mein)
@Injectable()
export class EmailService {
  @OnEvent('user.created')
  async handleUserCreated(event: UserCreatedEvent) {
    await this.sendWelcomeEmail(event.email, event.name);
  }
}`,
  },
  {
    id: 23,
    level: "Intermediate",
    tags: ["scheduling"],
    question: "NestJS mein scheduled tasks (cron jobs) kaise banate hain?",
    answer: `@nestjs/schedule package se cron jobs aur scheduled tasks easily banao.

**Types:**
- **@Cron()** — cron expression se schedule
- **@Interval()** — repeat at fixed intervals (ms)
- **@Timeout()** — ek baar delay ke baad run

**Common cron expressions:**
- '0 0 * * *' — daily midnight
- '0 9 * * 1-5' — weekdays 9am
- '*/5 * * * *' — har 5 minutes
- CronExpression.EVERY_DAY_AT_MIDNIGHT — named constants

**Use cases:**
- Daily report generate karo
- Expired sessions cleanup
- Cache warm up karo
- Email digests bhejo`,
    code: `// npm install @nestjs/schedule

@Module({
  imports: [ScheduleModule.forRoot()],
})

@Injectable()
export class TasksService {
  
  // Har din midnight pe run karo
  @Cron('0 0 * * *')
  async cleanExpiredSessions() {
    await this.sessionRepo.delete({ 
      expiresAt: LessThan(new Date()) 
    });
  }

  // Har 5 minute mein
  @Interval(5 * 60 * 1000)
  async syncDataFromExternalApi() {
    const data = await this.apiService.fetch();
    await this.cache.set('external_data', data, 10 * 60 * 1000);
  }

  // App start ke 10 second baad ek baar
  @Timeout(10000)
  async warmupCache() {
    await this.productsService.findAll(); // cache populate karo
  }
}`,
  },
  {
    id: 24,
    level: "Intermediate",
    tags: ["file-upload"],
    question: "File upload NestJS mein kaise karte hain? Validation kaise karein?",
    answer: `NestJS mein Multer package built-in support ke saath aata hai.

**@nestjs/platform-express mein already Multer included hai.**

**File upload ke types:**
- Single file: @UploadedFile()
- Multiple files: @UploadedFiles()

**Validation options:**
- fileSize limit
- file type (MIME type check)
- file count limit

**Storage options:**
- Memory storage (buffer mein) — small files ke liye
- Disk storage — directly disk par save
- Cloud storage (S3, Cloudinary) — production mein`,
    code: `// npm install -D @types/multer

@Controller('upload')
export class UploadController {

  @Post('image')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueName = \`\${Date.now()}-\${file.originalname}\`;
        cb(null, uniqueName);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
    fileFilter: (req, file, cb) => {
      const allowed = ['image/jpeg', 'image/png', 'image/webp'];
      if (allowed.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new BadRequestException('Sirf JPG/PNG/WebP allowed!'), false);
      }
    },
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      size: file.size,
      url: \`/uploads/\${file.filename}\`,
    };
  }
}`,
  },
  {
    id: 25,
    level: "Advanced",
    tags: ["testing", "e2e"],
    question: "E2E Testing NestJS mein kaise karte hain? Test database kaise setup karein?",
    answer: `E2E (End-to-End) testing mein real HTTP requests bhejte ho aur full application flow test karte ho.

**Setup:**
- supertest library se HTTP requests
- Separate test database use karo (SQLite in-memory ya test PostgreSQL)
- beforeAll mein app initialize karo
- afterAll mein close karo

**Best practices:**
- Production database pe test MAT karo
- Test data factory banao (fake data generate karo)
- Tests independent rakho (ek test doosre pe depend nahi)
- Seeders use karo (initial data setup)
- JWT token ko test mein generate karo

**SQLite in-memory:**
Tests ke liye SQLite perfect hai — no setup, fast, automatic cleanup`,
    code: `// test/jest-e2e.json mein SQLite setup
// OR test module mein override karo:

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  })
  .overrideProvider(TypeOrmModule) // DB override karo
  .useValue({
    type: 'sqlite',
    database: ':memory:',
    entities: [User, Post],
    synchronize: true,
  })
  .compile();

  app = moduleRef.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.init();
});

// Token generate karo tests ke liye
async function getAuthToken(): Promise<string> {
  const res = await request(app.getHttpServer())
    .post('/auth/login')
    .send({ email: 'test@test.com', password: 'Test@1234' });
  return res.body.access_token;
}

it('full user flow', async () => {
  // 1. Register
  const registerRes = await request(app.getHttpServer())
    .post('/auth/register')
    .send({ name: 'Test', email: 'new@test.com', password: 'Test@1234' })
    .expect(201);
  
  // 2. Login
  const loginRes = await request(app.getHttpServer())
    .post('/auth/login')
    .send({ email: 'new@test.com', password: 'Test@1234' })
    .expect(200);
  
  const token = loginRes.body.access_token;
  
  // 3. Protected route access
  await request(app.getHttpServer())
    .get('/users/me')
    .set('Authorization', \`Bearer \${token}\`)
    .expect(200);
});`,
  },
  {
    id: 26,
    level: "Beginner",
    tags: ["cli"],
    question: "NestJS CLI ke important commands kaunse hain?",
    answer: `NestJS CLI se quickly files generate kar sakte ho — boilerplate khud likhne ki zarurat nahi.

**Generate Commands:**
nest generate (ya nest g) se sab create hota hai:`,
    code: `# Project banao
nest new my-app

# Module
nest g module users         # src/users/users.module.ts
nest g mo users             # short form

# Controller (test file bhi banta hai)
nest g controller users     # users.controller.ts + spec.ts
nest g co users --no-spec   # bina test file

# Service
nest g service users
nest g s users

# Guard
nest g guard auth/jwt

# Interceptor
nest g interceptor common/transform

# Pipe
nest g pipe common/validation

# Filter
nest g filter common/http-exception

# Middleware
nest g middleware common/logger

# Decorator
nest g decorator common/current-user

# Ek saath sab (resource = module + controller + service + DTOs)
nest g resource users
# Yeh sab generate karta hai:
# users.module.ts, users.controller.ts, users.service.ts
# dto/create-user.dto.ts, dto/update-user.dto.ts
# entities/user.entity.ts

# Info
nest info   # versions check karo
nest build  # production build`,
  },
  {
    id: 27,
    level: "Intermediate",
    tags: ["database"],
    question: "Database Migrations kya hain? TypeORM migrations kaise run karte hain?",
    answer: `Migration = Database schema changes ko version control karna.

**Kyun migrations?**
- synchronize: true = dangerous (auto-alter tables)
- Migration = explicit, reviewable, reversible changes
- Team mein sab ko same schema milta hai
- Production deploy safe hoti hai

**Workflow:**
1. Entity mein changes karo
2. Migration generate karo
3. Review karo (SQL dekhte hain)
4. Run karo (up) ya rollback karo (down)

**Commands:**
- generate — current entities vs DB diff se migration banao
- run — pending migrations run karo
- revert — last migration rollback karo`,
    code: `# TypeORM CLI setup karo package.json mein:
# "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"

# Migration generate karo (entity changes detect karo)
npm run typeorm migration:generate -- src/migrations/AddUserAgeColumn

# Generated migration:
export class AddUserAgeColumn1700000000000 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'age',
      type: 'int',
      isNullable: true,
    }));
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'age');
  }
}

# Migrations run karo
npm run typeorm migration:run

# Last migration rollback karo
npm run typeorm migration:revert

# Data source config mein migrations folder add karo:
migrations: ['src/migrations/*{.ts,.js}'],
migrationsRun: false, // manually run karo`,
  },
  {
    id: 28,
    level: "Advanced",
    tags: ["patterns", "advanced"],
    question: "NestJS mein CQRS pattern kya hai aur kab use karein?",
    answer: `CQRS = Command Query Responsibility Segregation.

**Core idea:**
- **Commands** — write operations (CreateUser, UpdatePost, DeleteOrder)
- **Queries** — read operations (GetUser, ListProducts)
- Dono alag alag handle karo

**Kab use karein:**
- Complex domain logic ho
- Read aur write ko alag scale karna ho
- Event sourcing implement karni ho
- Large teams jahan read/write teams alag hain

**Kab MAT karein:**
- Simple CRUD apps
- Small teams
- Quick MVP

**@nestjs/cqrs package:**
CommandBus, QueryBus, EventBus available hain.`,
    code: `// npm install @nestjs/cqrs

// Command define karo
export class CreateUserCommand {
  constructor(
    public readonly name: string,
    public readonly email: string,
  ) {}
}

// Command Handler
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly usersRepo: UsersRepository) {}

  async execute(command: CreateUserCommand) {
    const { name, email } = command;
    return this.usersRepo.create({ name, email });
  }
}

// Query
export class GetUserQuery {
  constructor(public readonly id: number) {}
}

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  async execute(query: GetUserQuery) {
    return this.usersRepo.findById(query.id);
  }
}

// Controller mein CommandBus/QueryBus use karo
@Post()
create(@Body() dto: CreateUserDto) {
  return this.commandBus.execute(new CreateUserCommand(dto.name, dto.email));
}

@Get(':id')
get(@Param('id', ParseIntPipe) id: number) {
  return this.queryBus.execute(new GetUserQuery(id));
}`,
  },
  {
    id: 29,
    level: "Beginner",
    tags: ["basics"],
    question: "NestJS mein Request aur Response objects directly kaise access karein? Kyun avoid karein?",
    answer: `@Req() aur @Res() se raw Express request/response objects access kar sakte ho. Lekin avoid karna chahiye.

**Kyun avoid karein:**
1. Platform dependency — agar Fastify pe switch karo toh code change karna padega
2. Testing mushkil — NestJS automatically response serialize karta hai, @Res() se manually bhejne pe ye feature lost ho jaata hai
3. Interceptors kaam karna band kar dete hain agar @Res() use karo
4. Verbose code

**Exceptions:**
- Setting cookies (@Res() ka use karo ya Cookie decorator)
- Custom headers set karna (@Header() decorator prefer karo)
- File download/streaming

**Better alternatives:**
- @Headers() decorator
- @HttpCode() decorator
- NestJS return value (automatic JSON)`,
    code: `// Avoid karo:
@Get()
bad(@Req() req: Request, @Res() res: Response) {
  const data = this.service.findAll();
  res.status(200).json(data); // manual, verbose
  // Interceptors kaam nahi karenge!
}

// Prefer karo (NestJS way):
@Get()
@HttpCode(200)
good() {
  return this.service.findAll(); // NestJS automatic JSON + interceptors work
}

// Cookies ke liye @Res() zaroori hai:
@Post('login')
login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
  const token = this.authService.login(dto);
  res.cookie('token', token, { httpOnly: true });
  return { message: 'Logged in!' }; // passthrough: true se return work karta hai
}`,
  },
  {
    id: 30,
    level: "Advanced",
    tags: ["performance", "advanced"],
    question: "N+1 Problem kya hai TypeORM mein? Kaise solve karein?",
    answer: `N+1 Problem: Ek query karo → N results aayein → Har result ke liye additional query = 1+N queries total.

**Example:**
10 users fetch karo → Har user ke posts fetch karo = 11 queries. Performance killer!

**Solutions:**
1. **eager: true** — automatically load (risky, always loads)
2. **relations: ['posts']** — query mein specify karo
3. **QueryBuilder with JOIN** — zyada control
4. **DataLoader pattern** — batching (GraphQL se popular)

**QueryBuilder sabse flexible:**
JOIN se ek hi query mein sab data aata hai`,
    code: `// BAD — N+1 problem
const users = await userRepo.find(); // 1 query
for (const user of users) {
  user.posts = await postRepo.find({ where: { userId: user.id } }); // N queries!
}

// GOOD — Option 1: relations
const users = await userRepo.find({
  relations: ['posts'], // JOIN — 1 query
});

// GOOD — Option 2: QueryBuilder
const users = await userRepo
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.posts', 'post') // JOIN
  .leftJoinAndSelect('user.profile', 'profile')
  .where('user.isActive = :active', { active: true })
  .getMany();

// GOOD — Option 3: Selective loading
// Sirf tab load karo jab zaroorat ho
async getUserWithPosts(id: number) {
  return userRepo.findOne({
    where: { id },
    relations: ['posts'], // only when needed
  });
}

// GOOD — Option 4: Lazy loading (careful!)
// Entity mein: @OneToMany(() => Post, ..., { lazy: true })
// user.posts returns Promise
const posts = await user.posts; // single query when accessed`,
  },
];
