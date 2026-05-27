import type { Chapter } from "./chapters";

export const laravelChapters: Chapter[] = [
  {
    id: "laravel-intro",
    title: "Laravel Kya Hai? Setup",
    emoji: "🚀",
    category: "Basics",
    description: "Laravel introduction, installation, aur project structure",
    sections: [
      {
        heading: "Laravel kya hai?",
        content: `Laravel PHP ka most popular MVC framework hai. "Web artisans ke liye PHP framework" — elegant, expressive syntax.

**Laravel kyun?**
- Expressive, beautiful syntax
- Built-in authentication, routing, ORM, queue, mail, testing
- Eloquent ORM — database kaam simple
- Artisan CLI — code generate karo
- Huge community

**MVC Pattern:**
- **Model** — Data aur database logic
- **View** — UI (Blade templates)
- **Controller** — Request handle karo`,
        diagram: `
LARAVEL MVC FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Browser Request (GET /users)
           │
           ▼
  ┌─────────────────┐
  │   routes/web.php │  Route define karo
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │   Middleware    │  Auth, CORS, etc.
  └────────┬────────┘
           │
           ▼
  ┌─────────────────────┐
  │  UsersController    │  Request handle
  │  index() method     │
  └────────┬────────────┘
           │
           ▼
  ┌─────────────────┐
  │   User Model    │  Database query
  │   (Eloquent)    │
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │  users/index    │  Blade view render
  │  .blade.php     │
  └─────────────────┘
           │
           ▼
      HTML Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Laravel install karo
composer create-project laravel/laravel my-app
cd my-app

# Development server start karo
php artisan serve
# http://localhost:8000 par available

# .env file setup karo
# APP_KEY generate karo (already in .env)
php artisan key:generate

# Database connection (.env mein)
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel_db
# DB_USERNAME=root
# DB_PASSWORD=

# Artisan commands
php artisan list              # sab commands
php artisan make:controller UserController  # controller
php artisan make:model User --migration     # model + migration
php artisan make:request CreateUserRequest  # form request`,
        language: "bash",
        tip: "php artisan tinker use karo — interactive PHP shell jisme app code aur database test kar sakte ho bina browser ke.",
      },
      {
        heading: "Project Structure",
        content: ``,
        code: `my-laravel-app/
├── app/
│   ├── Http/
│   │   ├── Controllers/     ← Controllers yahan
│   │   ├── Middleware/      ← Custom middleware
│   │   └── Requests/        ← Form validation requests
│   ├── Models/              ← Eloquent models
│   └── Providers/           ← Service providers
│
├── bootstrap/               ← App bootstrap
├── config/                  ← Configuration files
├── database/
│   ├── migrations/          ← DB schema migrations
│   ├── seeders/             ← Test data
│   └── factories/           ← Model factories
│
├── public/                  ← Web root (index.php)
├── resources/
│   ├── views/               ← Blade templates
│   ├── css/                 ← CSS files
│   └── js/                  ← JavaScript files
│
├── routes/
│   ├── web.php              ← Web routes (session/CSRF)
│   └── api.php              ← API routes (stateless)
│
├── storage/                 ← Logs, cache, uploads
├── tests/                   ← PHPUnit tests
├── .env                     ← Environment variables
└── artisan                  ← CLI tool`,
        language: "text",
      },
    ],
    mcqs: [
      {
        q: "Laravel mein API routes kahan define karte hain?",
        options: ["routes/web.php", "routes/api.php", "app/Http/routes.php", "config/routes.php"],
        correct: 1,
        explain: "API routes routes/api.php mein hote hain — yeh stateless hain (no session/CSRF). Web routes routes/web.php mein.",
      },
    ],
    cheatsheet: [
      "composer create-project laravel/laravel app — install",
      "php artisan serve — dev server",
      "php artisan make:controller Name — controller",
      "php artisan make:model Name -m — model + migration",
      "php artisan migrate — migrations run karo",
      "php artisan tinker — interactive shell",
    ],
    revision: [
      "MVC: Model(data), View(UI), Controller(logic)",
      "routes/web.php = web, routes/api.php = API",
      "php artisan = Laravel CLI tool",
      ".env = environment configuration",
    ],
  },
  {
    id: "laravel-routing",
    title: "Routing aur Controllers",
    emoji: "🗺️",
    category: "Basics",
    description: "Laravel routing, controllers, aur resource controllers",
    sections: [
      {
        heading: "Routes — URL define karo",
        content: `Laravel mein routes bahut expressive hain.`,
        code: `<?php
// routes/web.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

// Basic routes
Route::get('/', fn() => view('welcome'));
Route::get('/about', fn() => 'About Page');

// Controller routes
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// Resource Controller — sab 7 routes ek line mein!
Route::resource('posts', PostController::class);
// Generates: index, create, store, show, edit, update, destroy

// Route Parameters
Route::get('/users/{id}', fn($id) => "User #$id");

// Optional parameter
Route::get('/search/{query?}', fn($query = 'all') => "Search: $query");

// Route Constraints
Route::get('/users/{id}', fn($id) => $id)
    ->where('id', '[0-9]+'); // sirf numbers

// Named Routes
Route::get('/users/{id}/edit', [UserController::class, 'edit'])
    ->name('users.edit');
// Use karo: route('users.edit', ['id' => 1])

// Route Groups
Route::prefix('admin')->middleware(['auth', 'admin'])->group(function() {
    Route::get('/dashboard', fn() => 'Admin Dashboard');
    Route::resource('users', AdminUserController::class);
});

// API routes (routes/api.php)
Route::prefix('v1')->group(function() {
    Route::apiResource('users', UserController::class); // no create/edit views
});`,
        language: "php",
      },
      {
        heading: "Controllers — Request handle karo",
        content: ``,
        code: `<?php
// app/Http/Controllers/UserController.php
namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    // GET /users
    public function index(Request $request): JsonResponse
    {
        $users = User::query()
            ->when($request->search, fn($q) => $q->where('name', 'like', "%{$request->search}%"))
            ->when($request->role, fn($q) => $q->where('role', $request->role))
            ->orderBy('created_at', 'desc')
            ->paginate($request->get('per_page', 15));

        return response()->json($users);
    }

    // GET /users/{id}
    public function show(User $user): JsonResponse  // Route Model Binding!
    {
        return response()->json($user->load('posts'));
    }

    // POST /users
    public function store(CreateUserRequest $request): JsonResponse
    {
        // Validation already done in CreateUserRequest
        $user = User::create($request->validated());

        return response()->json($user, 201);
    }

    // PUT/PATCH /users/{id}
    public function update(Request $request, User $user): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:100',
            'email' => "sometimes|email|unique:users,email,{$user->id}",
        ]);

        $user->update($validated);
        return response()->json($user);
    }

    // DELETE /users/{id}
    public function destroy(User $user): JsonResponse
    {
        $user->delete(); // soft delete if model has SoftDeletes trait
        return response()->json(null, 204);
    }
}`,
        language: "php",
        tip: "Route Model Binding magic: `User $user` parameter mein route ka {user} ID se automatically User find hota hai. 404 automatically throw hoti hai agar nahi mila.",
      },
    ],
    mcqs: [
      {
        q: "Route Model Binding kya karta hai?",
        options: [
          "Route ko model se connect karta hai manually",
          "URL parameter se automatically model instance inject karta hai",
          "Model ko database se sync karta hai",
          "Routes file generate karta hai",
        ],
        correct: 1,
        explain: "Route Model Binding URL parameter ({user}) se automatically User model find karta hai aur controller method mein inject karta hai. 404 auto-throw hoti hai.",
      },
    ],
    cheatsheet: [
      "Route::get/post/put/patch/delete — HTTP methods",
      "Route::resource('posts', Controller::class) — 7 routes",
      "Route::apiResource — resource without create/edit",
      "->name('users.show') — named route",
      "->middleware(['auth']) — middleware apply",
      "Route::prefix('admin')->group() — grouped routes",
      "User $user — Route Model Binding",
    ],
    revision: [
      "Route::resource = CRUD ke sab 7 routes ek line mein",
      "Route Model Binding = auto model injection from URL",
      "Named routes = URL changes se views safe",
      "Route groups = shared prefix/middleware",
    ],
  },
  {
    id: "laravel-eloquent",
    title: "Eloquent ORM — Database kaam karo",
    emoji: "💎",
    category: "Intermediate",
    description: "Eloquent models, relationships, aur database queries",
    sections: [
      {
        heading: "Eloquent Model — Active Record Pattern",
        content: `Eloquent mein har database table ek Model class se represent hoti hai.`,
        code: `<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'users';     // default: class name plural
    protected $primaryKey = 'id';   // default: id

    // Mass assignment protection
    protected $fillable = [
        'name', 'email', 'password', 'role', 'age',
    ];

    // Ya opposite approach — sab allow, sirf yeh protect karo:
    // protected $guarded = ['id', 'created_at'];

    // Hidden fields (JSON mein nahi aayenge)
    protected $hidden = ['password', 'remember_token'];

    // Cast types
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
        'settings' => 'array',  // JSON column auto-decode
        'age' => 'integer',
    ];

    // Accessor — value padhte waqt auto-transform
    public function getNameAttribute(string $value): string
    {
        return ucwords($value);
    }

    // Mutator — value likhte waqt auto-transform
    public function setPasswordAttribute(string $value): void
    {
        $this->attributes['password'] = bcrypt($value);
    }

    // Computed attribute (Laravel 9+)
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->first_name . ' ' . $this->last_name,
        );
    }
}`,
        language: "php",
      },
      {
        heading: "Eloquent Relationships",
        content: `Eloquent mein relationships define karna bahut easy aur powerful hai.`,
        code: `<?php
// User model mein relationships
class User extends Model
{
    // One to Many — User ke many Posts
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    // Has One — User ka ek Profile
    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    // Many to Many — User ke many Roles
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'user_roles')
                    ->withTimestamps()
                    ->withPivot('assigned_at');
    }

    // Has Many Through
    public function comments(): HasManyThrough
    {
        return $this->hasManyThrough(Comment::class, Post::class);
    }
}

// Post model
class Post extends Model
{
    // Inverse of HasMany
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Polymorphic
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

// Queries with Relationships:

// Eager Loading — N+1 problem solve karo
$users = User::with(['posts', 'profile'])->get(); // 2 queries, not N+1!

// Lazy eager loading
$users = User::all();
$users->load('posts');

// Conditional eager loading
$users = User::with(['posts' => function($q) {
    $q->where('status', 'published')->orderBy('created_at', 'desc');
}])->get();

// Create related model
$user->posts()->create(['title' => 'Hello World', 'content' => '...']);

// Attach/Detach (Many to Many)
$user->roles()->attach($roleId);
$user->roles()->detach($roleId);
$user->roles()->sync([$roleId1, $roleId2]); // exact set

// Count
$postsCount = $user->posts()->count();

// Exists?
if ($user->posts()->exists()) { ... }`,
        language: "php",
        tip: "Hamesha with() se eager load karo relationships — N+1 problem Laravel ki most common performance issue hai.",
        warning: "Mass assignment ka dhyan rakho — $fillable ya $guarded zaroor set karo. Bina iske create() aur update() kaam nahi karta.",
      },
      {
        heading: "Query Builder — Complex Queries",
        content: ``,
        code: `<?php
// Eloquent Query Builder — method chaining
$users = User::query()
    ->select('id', 'name', 'email', 'created_at')
    ->where('is_active', true)
    ->where('role', '!=', 'banned')
    ->whereBetween('age', [18, 60])
    ->whereNotNull('email_verified_at')
    ->whereHas('posts', fn($q) => $q->where('status', 'published'))
    ->withCount('posts')  // posts_count column add karo
    ->orderBy('created_at', 'desc')
    ->paginate(15);

// Raw queries (jab ORM kaafi na ho)
$result = DB::select("SELECT * FROM users WHERE age > ?", [18]);
DB::statement("UPDATE users SET views = views + 1 WHERE id = ?", [1]);

// Query Scopes — reusable query conditions
class User extends Model
{
    // Local scope — queryable chain karo
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeRole($query, string $role)
    {
        return $query->where('role', $role);
    }
}

// Use karo:
User::active()->role('admin')->get(); // magic!

// Chunks — large datasets memory efficiently process
User::where('is_active', true)->chunk(100, function($users) {
    foreach ($users as $user) {
        // Process karo 100 at a time
        Mail::to($user)->send(new Newsletter());
    }
});

// Pluck — single column
$emails = User::pluck('email'); // collection of emails

// Value — single value
$totalUsers = User::count();
$avgAge = User::avg('age');`,
        language: "php",
      },
    ],
    mcqs: [
      {
        q: "N+1 problem Laravel mein kaise solve karte hain?",
        options: [
          "with() — eager loading",
          "join() — SQL join",
          "load() — lazy loading",
          "compact() — PHP function",
        ],
        correct: 0,
        explain: "with('relationship') se eager loading hoti hai — related data ek alag query mein sab at once load hota hai, N individual queries nahi.",
      },
    ],
    cheatsheet: [
      "User::create($data) — new record",
      "User::find($id) — ID se find",
      "User::where('col', 'val')->get() — filtered list",
      "User::with('posts')->get() — eager load",
      "$user->update($data) — update",
      "$user->delete() — delete (soft if trait enabled)",
      "hasMany, belongsTo, belongsToMany — relationships",
      "paginate(15) — pagination",
    ],
    revision: [
      "Eloquent = Active Record pattern",
      "$fillable = allowed fields for mass assignment",
      "with() = eager loading (N+1 solve)",
      "Scope = reusable query conditions",
    ],
  },
  {
    id: "laravel-auth",
    title: "Authentication — Laravel Sanctum",
    emoji: "🔐",
    category: "Intermediate",
    description: "API authentication with Sanctum, login, register, aur protected routes",
    sections: [
      {
        heading: "Laravel Sanctum setup karo",
        content: `Sanctum Laravel ka lightweight API authentication package hai — SPA aur mobile apps ke liye.`,
        code: `# Sanctum install karo
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"
php artisan migrate

# User model mein HasApiTokens add karo:`,
        language: "bash",
      },
      {
        heading: "Auth Controller — Register, Login, Logout",
        content: ``,
        code: `<?php
// app/Http/Controllers/AuthController.php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:100',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed', // password_confirmation field bhi chahiye
        ]);

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user'         => $user,
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => 'Email ya password galat hai.',
            ]);
        }

        // Purane tokens delete karo (optional)
        $user->tokens()->delete();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user'         => $user,
            'access_token' => $token,
            'token_type'   => 'Bearer',
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }
}

// routes/api.php
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::apiResource('users', UserController::class);
});`,
        language: "php",
        tip: "Sanctum mein rate limiting add karo login route par: Route::middleware(['throttle:5,1'])->post('/auth/login', ...) — 5 attempts per minute.",
      },
    ],
    cheatsheet: [
      "use HasApiTokens — User model mein add karo",
      "$user->createToken('name')->plainTextToken — token banao",
      "auth:sanctum middleware — routes protect karo",
      "$request->user() — authenticated user",
      "$user->tokens()->delete() — sab tokens revoke",
      "Hash::make($pass) — password hash karo",
      "Hash::check($plain, $hash) — verify karo",
    ],
    revision: [
      "Sanctum = lightweight API tokens",
      "Bearer token = Authorization header mein bhejo",
      "auth:sanctum = route protection middleware",
      "currentAccessToken()->delete() = logout",
    ],
  },
  {
    id: "laravel-advanced",
    title: "Migrations, Seeders, Queues",
    emoji: "🔧",
    category: "Advanced",
    description: "Database migrations, test data seeding, aur background jobs",
    sections: [
      {
        heading: "Migrations — Schema version control",
        content: `Migrations database schema ko code mein version control karte hain.`,
        code: `<?php
// database/migrations/create_users_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void  // apply migration
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();                         // BIGINT AUTO_INCREMENT
            $table->string('name', 100);
            $table->string('email', 150)->unique();
            $table->string('password');
            $table->enum('role', ['admin','user','moderator'])->default('user');
            $table->unsignedTinyInteger('age')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();               // created_at + updated_at
            $table->softDeletes();              // deleted_at
        });

        // Add post-creation indexes
        Schema::table('users', function (Blueprint $table) {
            $table->index('role');
        });
    }

    public function down(): void  // rollback
    {
        Schema::dropIfExists('users');
    }
};

// Migration commands
// php artisan migrate                    -- run pending
// php artisan migrate:rollback          -- last batch rollback
// php artisan migrate:reset             -- sab rollback
// php artisan migrate:fresh --seed      -- drop+recreate+seed
// php artisan make:migration add_phone_to_users`,
        language: "php",
      },
      {
        heading: "Seeders aur Factories",
        content: `Seeders se test data database mein insert karo.`,
        code: `<?php
// database/factories/UserFactory.php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'  => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => Hash::make('password'),
            'role' => fake()->randomElement(['admin', 'user', 'moderator']),
            'age' => fake()->numberBetween(18, 65),
            'email_verified_at' => now(),
        ];
    }

    // State modifiers
    public function admin(): static
    {
        return $this->state(['role' => 'admin']);
    }

    public function unverified(): static
    {
        return $this->state(['email_verified_at' => null]);
    }
}

// database/seeders/DatabaseSeeder.php
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin user create karo
        User::factory()->admin()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ]);

        // 50 random users
        User::factory(50)->create();

        // Each user ke 5 posts
        User::all()->each(function ($user) {
            Post::factory(5)->create(['user_id' => $user->id]);
        });
    }
}

// Run seeders:
// php artisan db:seed
// php artisan migrate:fresh --seed

// Queue — Background Jobs
php artisan make:job SendWelcomeEmail

// app/Jobs/SendWelcomeEmail.php
class SendWelcomeEmail implements ShouldQueue
{
    public function __construct(private User $user) {}

    public function handle(): void
    {
        Mail::to($this->user->email)->send(new WelcomeEmail($this->user));
    }
}

// Controller mein dispatch karo
SendWelcomeEmail::dispatch($user);
SendWelcomeEmail::dispatch($user)->delay(now()->addMinutes(10));

// Worker start karo
// php artisan queue:work`,
        language: "php",
        tip: "php artisan migrate:fresh --seed use karo development mein fresh start ke liye — sab tables drop, recreate, aur test data seed.",
      },
    ],
    cheatsheet: [
      "php artisan make:migration create_users_table",
      "php artisan migrate — pending migrations run",
      "php artisan migrate:rollback — last batch undo",
      "php artisan make:factory UserFactory",
      "User::factory(50)->create() — 50 fake users",
      "php artisan db:seed — seeders run karo",
      "ShouldQueue implement — background job",
      "php artisan queue:work — worker start karo",
    ],
    revision: [
      "Migration = schema version control (up/down)",
      "Factory = fake data generator",
      "Seeder = database populate karo (test/initial data)",
      "Queue = time-consuming tasks background mein",
    ],
  },
  {
    id: "laravel-middleware",
    title: "Middleware & Request Lifecycle",
    emoji: "🔄",
    category: "Intermediate",
    description: "HTTP middleware banana, request/response modify karna, aur Laravel request lifecycle",
    sections: [
      {
        heading: "Middleware kya hai?",
        content: `Middleware = request aur response ke beech mein code. HTTP requests filter karta hai.
Common uses:
- **Authentication** — user logged in hai?
- **Authorization** — permission hai?
- **Rate Limiting** — too many requests?
- **Logging** — requests log karna
- **CORS** — cross-origin headers`,
        code: `// Middleware generate karo
php artisan make:middleware EnsureTokenIsValid

// app/Http/Middleware/EnsureTokenIsValid.php
namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;

class EnsureTokenIsValid {
    public function handle(Request $request, Closure $next) {
        // Request se pehle check
        if ($request->header('X-API-Token') !== config('app.api_token')) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        // Next middleware/controller ko pass karo
        $response = $next($request);
        
        // Response ke baad kuch karo
        $response->header('X-Processed-At', now()->toISOString());
        
        return $response;
    }
}`,
        language: "php",
      },
      {
        heading: "Middleware Register & Apply Karna",
        content: `Middleware ko register karo aur routes pe apply karo.`,
        code: `// bootstrap/app.php (Laravel 11)
->withMiddleware(function (Middleware $middleware) {
    // Global middleware
    $middleware->append(LogRequests::class);
    
    // Middleware alias
    $middleware->alias([
        'auth.token' => EnsureTokenIsValid::class,
        'role'       => CheckUserRole::class,
    ]);
    
    // Group
    $middleware->group('api-auth', [
        EnsureTokenIsValid::class,
        RateLimiter::class,
    ]);
})

// routes/api.php — apply karo
Route::middleware('auth.token')->group(function() {
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
});

// Multiple middleware
Route::middleware(['auth', 'role:admin'])->group(function() {
    Route::resource('/admin/users', AdminUserController::class);
});

// Middleware parameters
class CheckRole {
    public function handle(Request $req, Closure $next, string ...$roles) {
        if (!in_array($req->user()->role, $roles)) {
            abort(403, 'Forbidden');
        }
        return $next($req);
    }
}`,
        language: "php",
        tip: "Middleware ko small aur focused rakho — ek kaam kare. Multiple middleware chain karo instead of ek mota middleware.",
      },
    ],
    mcqs: [
      { q: "Middleware mein $next($request) kya karta hai?", options: ["Request complete karta hai", "Next middleware ya controller ko request pass karta hai", "Response send karta hai", "Authentication check karta hai"], correct: 1, explain: "$next($request) request ko next middleware ya final controller pe pass karta hai. Call na karo toh request yahi stop ho jaayega." },
      { q: "Global middleware aur Route middleware mein fark?", options: ["Performance fark", "Global = har request pe, Route = specific routes pe", "Global = production only", "Route = middleware group ke liye sirf"], correct: 1, explain: "Global middleware (like TrimStrings) har HTTP request pe run hota hai. Route middleware specific routes ya groups pe apply karo." },
    ],
    cheatsheet: [
      "php artisan make:middleware NameMiddleware",
      "handle(Request $req, Closure $next): Response",
      "return $next($request) — pass forward",
      "Route::middleware('name')->group(fn)",
      "->withMiddleware(fn) — register (Laravel 11)",
      "abort(403) — forbidden response",
    ],
    revision: [
      "Middleware = request-response ke beech mein filter",
      "$next($request) = forward to next layer",
      "Global = har request, Route = specific routes",
      "Middleware parameters: role:admin,editor",
      "Bootstrap/app.php mein register karo (Laravel 11)",
    ],
  },
  {
    id: "laravel-validation",
    title: "Validation & Form Requests",
    emoji: "✅",
    category: "Intermediate",
    description: "Request validation, Form Request classes, custom rules, aur validation messages",
    sections: [
      {
        heading: "Validation Basics",
        content: `Laravel mein validation Controller ya Form Request class mein karo.`,
        code: `// Controller mein inline validation
class UserController extends Controller {
    public function store(Request $request) {
        $validated = $request->validate([
            'name'     => 'required|string|min:2|max:100',
            'email'    => 'required|email|unique:users,email',
            'age'      => 'required|integer|min:18|max:120',
            'password' => 'required|string|min:8|confirmed',
            'role'     => 'required|in:user,admin,moderator',
            'avatar'   => 'nullable|image|mimes:jpg,png|max:2048',
        ]);
        
        // $validated mein sirf validated fields hain
        User::create($validated);
        return response()->json($validated, 201);
    }
}

// Custom error messages
$request->validate(
    ['email' => 'required|email'],
    ['email.required' => 'Email address zaroori hai!',
     'email.email'    => 'Sahi email format do']
);`,
        language: "php",
      },
      {
        heading: "Form Request — Reusable Validation",
        content: `Form Request = dedicated class for validation + authorization.`,
        code: `// Generate
php artisan make:request StoreUserRequest

// app/Http/Requests/StoreUserRequest.php
class StoreUserRequest extends FormRequest {
    public function authorize(): bool {
        // Permission check — true = allow
        return $this->user()->can('create-users');
    }
    
    public function rules(): array {
        return [
            'name'     => ['required', 'string', 'min:2', 'max:100'],
            'email'    => ['required', 'email', Rule::unique('users')->ignore($this->user)],
            'password' => ['required', Password::min(8)->letters()->numbers()],
        ];
    }
    
    public function messages(): array {
        return [
            'name.required' => 'Naam zaroori hai',
            'email.unique'  => 'Email already registered hai',
        ];
    }
    
    // Pre-validation data modify
    protected function prepareForValidation(): void {
        $this->merge(['email' => strtolower($this->email)]);
    }
}

// Controller mein use karo
class UserController extends Controller {
    public function store(StoreUserRequest $request) {
        // Automatically validated! Yahan pahuncha = sab valid
        User::create($request->validated());
    }
}`,
        language: "php",
        tip: "Form Request use karo Controllers slim rakhne ke liye. Agar ek se zyada controllers same validation use karein toh Form Request must hai!",
      },
    ],
    mcqs: [
      { q: "Form Request authorize() method kya karta hai?", options: ["Validation run karta hai", "User ko authenticate karta hai", "Permission check — false return pe 403 forbidden", "Middleware check karta hai"], correct: 2, explain: "authorize() true return kare toh validation proceed hoti hai. false return pe Laravel automatically 403 Forbidden response deta hai." },
      { q: "unique:users,email validation rule kya karta hai?", options: ["Email format check", "Users table mein email unique hai ya nahi check", "Email exists check", "Domain validation"], correct: 1, explain: "unique:table,column rule database mein check karta hai ki value already exist nahi karti. Update ke liye Rule::unique()->ignore(id) use karo." },
    ],
    cheatsheet: [
      "php artisan make:request MyRequest",
      "'required|string|min:2|max:100' — rules",
      "'email|unique:users,email' — email + unique",
      "'confirmed' — field_confirmation match",
      "'nullable|image|max:2048' — optional image",
      "Rule::unique('users')->ignore($id) — update",
      "$request->validated() — only valid fields",
      "Password::min(8)->letters()->numbers()",
    ],
    revision: [
      "validate() = inline validation in controller",
      "Form Request = reusable validation class",
      "authorize() = permission check, false = 403",
      "rules() = validation rules array",
      "$request->validated() = safe, clean data only",
    ],
  },
  {
    id: "laravel-queues",
    title: "Queues & Jobs",
    emoji: "⚡",
    category: "Advanced",
    description: "Background jobs, queue drivers, email/notification queuing, aur job monitoring",
    sections: [
      {
        heading: "Queues kyun zaroori hain?",
        content: `Time-consuming tasks ko background mein karo — user ka wait mat karwao.
- Email sending (2-5 seconds)
- Image processing
- PDF generation
- SMS/Push notifications
- Third-party API calls`,
        code: `// Job create karo
php artisan make:job SendWelcomeEmail

// app/Jobs/SendWelcomeEmail.php
class SendWelcomeEmail implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public int $tries = 3;     // retry count
    public int $timeout = 60;  // seconds
    
    public function __construct(
        private User $user
    ) {}
    
    public function handle(Mailer $mailer): void {
        $mailer->to($this->user->email)
               ->send(new WelcomeMail($this->user));
    }
    
    public function failed(Throwable $exception): void {
        // Job fail hone pe
        Log::error("Welcome email failed for user {$this->user->id}", [
            'error' => $exception->getMessage()
        ]);
    }
}

// Dispatch karo (background mein jaayega!)
SendWelcomeEmail::dispatch($user);

// Delay ke saath
SendWelcomeEmail::dispatch($user)->delay(now()->addMinutes(5));

// Specific queue pe
SendWelcomeEmail::dispatch($user)->onQueue('emails');`,
        language: "php",
      },
      {
        heading: "Queue Worker & Configuration",
        content: `Queue drivers: database, Redis, SQS (production mein Redis best hai).`,
        code: `# .env
QUEUE_CONNECTION=redis  # database, redis, sqs

# Queue worker start karo
php artisan queue:work redis --queue=emails,default

# Horizon (Redis-based dashboard)
composer require laravel/horizon
php artisan horizon

# Queue monitor karo
php artisan queue:listen
php artisan queue:monitor emails:50,default:100

# Failed jobs dekho aur retry karo
php artisan queue:failed
php artisan queue:retry all
php artisan queue:flush  # sab failed delete

// config/queue.php
'connections' => [
    'redis' => [
        'driver'     => 'redis',
        'connection' => 'default',
        'queue'      => ['default'],
        'retry_after' => 90,
        'block_for'  => null,
    ],
],

// Batch Jobs — multiple jobs saath
use Illuminate\\Bus\\Batch;
Bus::batch([
    new ProcessImage($image1),
    new ProcessImage($image2),
])->then(fn(Batch $b) => Log::info('All done!'))
  ->catch(fn(Batch $b, Throwable $e) => Log::error('Failed'))
  ->dispatch();`,
        language: "php",
        tip: "Production mein Redis as queue driver use karo (database se much faster). Supervisor ya Laravel Horizon se queue worker manage karo.",
      },
    ],
    mcqs: [
      { q: "ShouldQueue interface implement karne se kya hota hai?", options: ["Job automatically schedule hoti hai", "Job synchronously run hoti hai", "Job queue mein dispatch hoti hai background mein", "Job retry hoti hai automatically"], correct: 2, explain: "ShouldQueue implement karne se dispatch() call hone pe job queue mein jaati hai — background worker process karta hai. Without it, synchronously run hogi." },
      { q: "Queue worker production mein kaise manage karein?", options: ["Manual cron job", "Supervisor ya Laravel Horizon se process management", "Apache config se", "PHP-FPM se automatically"], correct: 1, explain: "Supervisor (process monitor) queue workers ko automatically restart karta hai agar crash hon. Laravel Horizon Redis workers ke liye dashboard bhi deta hai." },
    ],
    cheatsheet: [
      "php artisan make:job JobName",
      "class MyJob implements ShouldQueue",
      "MyJob::dispatch($data) — queue mein bhejo",
      "->delay(now()->addMinutes(5)) — delay",
      "->onQueue('emails') — specific queue",
      "php artisan queue:work — worker start",
      "$tries = 3, $timeout = 60 — retry config",
      "failed() method — failure handling",
    ],
    revision: [
      "Queues = background jobs, user wait nahi karta",
      "ShouldQueue implement = job queued hogi",
      "dispatch() = queue mein bhejo",
      "failed() method = failure handling",
      "Redis = production queue driver (fast)",
    ],
  },
];

export const laravelInterviews = [
  {
    id: 301,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "Laravel Service Container kya hai?",
    answer: `Service Container Laravel ka IoC (Inversion of Control) container hai — classes aur dependencies ko manage karta hai.

**Kaise kaam karta hai:**
- Classes register karo container mein (bind)
- Dependencies resolve karo (make/resolve)
- Constructor injection automatic hoti hai

**Fayde:**
- Automatic dependency injection
- Interface ke liye implementation swap karo
- Testing mein mocks inject karo`,
    code: `// Interface bind karo
app()->bind(PaymentGateway::class, StripeGateway::class);

// Ya Singleton
app()->singleton(Config::class, fn() => new Config(.env()));

// Auto-resolve — constructor mein type-hint karo
class OrderController extends Controller {
    public function __construct(
        private PaymentGateway $payment  // auto-injected!
    ) {}
}`,
  },
  {
    id: 302,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Eloquent mein N+1 problem kya hai? Kaise solve karein?",
    answer: `N+1 Problem: 1 query se N records lao → phir har record ke liye 1 aur query = 1+N total queries.

**Example:** 100 users ke posts load karo — 1 (users) + 100 (posts for each user) = 101 queries!

**Solution: Eager Loading with with()**

**with()** — upfront load karo
**select()** — sirf zaruri columns load karo
**withCount()** — count sirf chahiye toh full load mat karo`,
    code: `// BAD — N+1
$users = User::all();
foreach ($users as $user) {
    echo $user->posts->count(); // Har user ke liye DB query!
}

// GOOD — Eager loading
$users = User::with('posts')->get(); // 2 queries total!
foreach ($users as $user) {
    echo $user->posts->count(); // No additional queries
}

// withCount — aur optimize
$users = User::withCount('posts')->get();
echo $user->posts_count; // No actual posts load!`,
  },
  {
    id: 303,
    level: "Intermediate" as const,
    tags: ["middleware"],
    question: "Laravel Middleware kya hai? Custom middleware kaise banate hain?",
    answer: `Middleware HTTP request/response cycle mein filter layer hai. Before aur after route handler execute ho sakta hai.

**Built-in Laravel Middleware:**
- auth — authentication check
- throttle — rate limiting
- verified — email verification
- cors — CORS headers

**Custom Middleware:**
php artisan make:middleware CheckAge`,
    code: `<?php
// CheckAge middleware
class CheckAge
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->age < 18) {
            return response()->json(['error' => '18+ only'], 403);
        }
        
        $response = $next($request); // aage bhejo
        
        // After response — kuch add karo
        $response->headers->set('X-Age-Checked', 'true');
        
        return $response;
    }
}

// Register in bootstrap/app.php (Laravel 11):
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias(['check.age' => CheckAge::class]);
})

// Route mein use karo:
Route::get('/adult', fn() => 'adults only')->middleware('check.age');`,
  },
  {
    id: 305,
    level: "Beginner" as const,
    tags: ["artisan"],
    question: "Laravel Artisan commands kaunse most useful hain?",
    answer: `Artisan = Laravel ka command-line tool. php artisan se run karte hain.

**Most used commands:**
- make:model, make:controller, make:migration
- migrate, migrate:rollback, migrate:fresh
- make:seeder, db:seed
- route:list — sab routes dekho
- cache:clear, config:clear, view:clear
- tinker — interactive PHP REPL
- make:middleware, make:request, make:policy
- queue:work — queue worker shuru karo
- schedule:run — scheduled tasks run karo`,
    code: `# Model + migration + controller ek saath
php artisan make:model Post -mcr
# -m = migration, -c = controller, -r = resource methods

# Migration
php artisan migrate
php artisan migrate:rollback        # last batch undo
php artisan migrate:fresh           # drop + remigrate
php artisan migrate:fresh --seed    # remigrate + seed

# Route list (filter by name)
php artisan route:list --name=user
php artisan route:list --method=POST

# Tinker — REPL
php artisan tinker
>>> User::count()
>>> User::factory()->create(['name' => 'Ali'])
>>> User::where('role', 'admin')->get()

# Cache clear
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan optimize:clear    # all caches clear

# Make commands
php artisan make:request StoreUserRequest
php artisan make:policy UserPolicy --model=User
php artisan make:job ProcessPayment
php artisan make:event UserRegistered
php artisan make:listener SendWelcomeEmail --event=UserRegistered
php artisan make:notification OrderShipped
php artisan make:mail WelcomeMail`,
  },
  {
    id: 306,
    level: "Beginner" as const,
    tags: ["eloquent"],
    question: "Eloquent relationships kaunse hain? Examples do.",
    answer: `Eloquent ORM mein 6 types of relationships hain:

**Basic:**
- **hasOne** — Ek user ka ek profile
- **belongsTo** — Profile belongs to User
- **hasMany** — User ke many posts
- **belongsToMany** — Post ke many tags, tag ke many posts (pivot table)

**Advanced:**
- **hasOneThrough** — Country → User → Profile
- **hasManyThrough** — Country → Users → Posts
- **morphTo/morphMany/morphToMany** — Polymorphic (ek model multiple models se relate)`,
    code: `<?php
// HasOne
class User extends Model {
    public function profile(): HasOne {
        return $this->hasOne(Profile::class);
    }
}

// BelongsTo
class Profile extends Model {
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

// HasMany
class User extends Model {
    public function posts(): HasMany {
        return $this->hasMany(Post::class);
    }
}

// BelongsToMany (pivot table: post_tag)
class Post extends Model {
    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class)
            ->withPivot('order')
            ->withTimestamps();
    }
}

// Polymorphic — Comments on Post AND Video
class Comment extends Model {
    public function commentable(): MorphTo {
        return $this->morphTo();
    }
}

class Post extends Model {
    public function comments(): MorphMany {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

// Usage
$user->profile;               // HasOne
$user->posts;                 // HasMany (collection)
$user->posts()->latest()->limit(5)->get();  // query builder
$post->tags()->attach($tagId, ['order' => 1]);  // pivot
$post->comments()->create(['body' => 'Great!']);`,
  },
  {
    id: 307,
    level: "Intermediate" as const,
    tags: ["validation"],
    question: "Laravel mein Request Validation kaise karein? Custom rules kaise banate hain?",
    answer: `**Validation approaches:**
1. **Controller mein** — $request->validate([...])
2. **Form Request class** — make:request se — best practice
3. **Validator facade** — manual validation

**Form Request fayde:**
- Controller thin rehta hai
- Reusable validation logic
- Authorization bhi yahan kar sakte hain
- Custom messages

**Custom Rules:** php artisan make:rule`,
    code: `<?php
// 1. Controller mein (simple cases)
public function store(Request $request) {
    $validated = $request->validate([
        'name'  => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'age'   => 'required|integer|min:18|max:120',
        'role'  => 'required|in:admin,user,editor',
        'photo' => 'nullable|image|mimes:jpg,png|max:2048',
    ]);
    
    User::create($validated);
}

// 2. Form Request (best practice)
// php artisan make:request StoreUserRequest
class StoreUserRequest extends FormRequest {
    public function authorize(): bool {
        return auth()->check();  // who can submit?
    }
    
    public function rules(): array {
        return [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email', Rule::unique('users')],
            'password' => ['required', 'min:8', 'confirmed'],
        ];
    }
    
    public function messages(): array {
        return [
            'email.unique' => 'Yeh email already registered hai!',
            'password.confirmed' => 'Passwords match nahi hue.',
        ];
    }
}

// Controller (super clean!)
public function store(StoreUserRequest $request) {
    // Already validated!
    User::create($request->validated());
}

// 3. Custom Rule
// php artisan make:rule PhoneNumber
class PhoneNumber implements ValidationRule {
    public function validate(string $attribute, mixed $value, Closure $fail): void {
        if (!preg_match('/^03\d{9}$/', $value)) {
            $fail('Invalid Pakistani phone number (03XXXXXXXXX)');
        }
    }
}

// Use custom rule
'phone' => ['required', new PhoneNumber],`,
  },
  {
    id: 308,
    level: "Intermediate" as const,
    tags: ["auth"],
    question: "Laravel Policies aur Gates kya hain? Difference kya hai?",
    answer: `**Gates:** Simple closure-based authorization. Simple checks ke liye.
**Policies:** Model ke liye organize authorization logic. Ek model → ek policy class.

**Kab kya use karein:**
- Gate: Global actions (admin check, feature flags)
- Policy: Model-specific (user can edit this post?)

**Auto-discovery:** Model aur Policy naming convention follow karo → automatic register.

**Eloquent integration:** can() aur cant() helpers, @can Blade directive`,
    code: `<?php
// GATES — simple authorization
// AuthServiceProvider mein:
Gate::define('view-admin-panel', fn(User $user) => $user->isAdmin());
Gate::define('publish-post', fn(User $user, Post $post) => $user->id === $post->user_id);

// Use in controller
if (Gate::allows('view-admin-panel')) { /* admin content */ }
if (Gate::denies('publish-post', $post)) abort(403);

// POLICY
// php artisan make:policy PostPolicy --model=Post
class PostPolicy {
    // User koi bhi post dekh sakta hai
    public function view(?User $user, Post $post): bool {
        return $post->published || $user?->id === $post->user_id;
    }
    
    // Sirf owner edit kar sakta hai
    public function update(User $user, Post $post): bool {
        return $user->id === $post->user_id;
    }
    
    // Sirf admins delete kar sakte hain
    public function delete(User $user, Post $post): bool {
        return $user->isAdmin() || $user->id === $post->user_id;
    }
    
    // Global admin bypass
    public function before(User $user): bool|null {
        return $user->role === 'superadmin' ? true : null;
    }
}

// Controller mein
$this->authorize('update', $post);  // 403 if denied

// Blade mein
@can('update', $post)
    <a href="{{ route('posts.edit', $post) }}">Edit</a>
@endcan

// User model pe
$user->can('delete', $post);    // true/false
$user->cannot('update', $post); // true/false`,
  },
  {
    id: 309,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Eloquent Scopes (local aur global) kya hain?",
    answer: `**Local Scopes:** Reusable query constraints jo manually call karni padti hain. scope prefix + method naam.

**Global Scopes:** Automatically apply hoti hain sab queries pe us model ke liye. SoftDeletes ek built-in global scope hai.

**Kab use karein:**
- Local: Frequently used filter conditions (active, published, recent)
- Global: Hamesha apply hone wali conditions (tenant isolation, soft deletes, published-only)`,
    code: `<?php
// LOCAL SCOPES
class Post extends Model {
    // "scope" prefix, call mein mat likho
    public function scopePublished(Builder $query): Builder {
        return $query->where('status', 'published');
    }
    
    public function scopeRecent(Builder $query, int $days = 30): Builder {
        return $query->where('created_at', '>=', now()->subDays($days));
    }
    
    public function scopeByCategory(Builder $query, string $cat): Builder {
        return $query->where('category', $cat);
    }
    
    public function scopePopular(Builder $query): Builder {
        return $query->where('views', '>', 1000)->orderBy('views', 'desc');
    }
}

// Usage — method chain karo!
Post::published()->recent()->get();
Post::published()->byCategory('tech')->popular()->paginate(10);

// GLOBAL SCOPE
class ActiveScope implements Scope {
    public function apply(Builder $builder, Model $model): void {
        $builder->where('active', true);
    }
}

class User extends Model {
    protected static function booted(): void {
        static::addGlobalScope(new ActiveScope());
        // Ya closure style:
        static::addGlobalScope('active', fn(Builder $b) => $b->where('active', 1));
    }
}

// Automatic! Sab queries pe active=1 filter lagega
User::all();          // WHERE active = 1 automatically!
User::find(1);        // WHERE id = 1 AND active = 1

// Global scope remove karo (ek specific query ke liye)
User::withoutGlobalScope('active')->where('role', 'admin')->get();`,
  },
  {
    id: 310,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Eloquent Mutators, Accessors, aur Casts kya hain?",
    answer: `**Accessor (get):** Model attribute read karte waqt transform karo.
**Mutator (set):** Model attribute set karte waqt transform karo.
**Casts:** Attribute ko automatically specific type mein convert karo.

**PHP 8 style (Laravel 9+):** Attribute class use karo — getter aur setter ek saath.

**Common Casts:** integer, float, boolean, array, collection, datetime, encrypted, AsStringable`,
    code: `<?php
// NEW STYLE (Laravel 9+ / PHP 8)
class User extends Model {
    protected function fullName(): Attribute {
        return Attribute::make(
            // Accessor — read karte waqt
            get: fn() => "{$this->first_name} {$this->last_name}",
        );
    }
    
    protected function password(): Attribute {
        return Attribute::make(
            // Mutator — write karte waqt
            set: fn(string $value) => bcrypt($value),
        );
    }
    
    protected function firstName(): Attribute {
        return Attribute::make(
            get: fn($value) => ucfirst($value),
            set: fn($value) => strtolower($value),
        );
    }
    
    // CASTS — automatic type conversion
    protected $casts = [
        'email_verified_at' => 'datetime',  // Carbon instance
        'is_active'         => 'boolean',
        'preferences'       => 'array',     // JSON → PHP array
        'balance'           => 'decimal:2', // 2 decimal places
        'metadata'          => 'collection',
        'role'              => UserRole::class,  // Enum (PHP 8.1)
    ];
}

// Usage
$user = User::create([
    'first_name' => 'ALI',           // stored as 'ali'
    'last_name'  => 'KHAN',
    'password'   => 'secret123',     // automatically hashed!
    'is_active'  => true,
    'preferences' => ['theme' => 'dark', 'lang' => 'ur'],
]);

$user->full_name;           // "Ali Khan" (accessor)
$user->email_verified_at;  // Carbon instance
$user->preferences;         // PHP array (from JSON)
$user->is_active;           // true (boolean, not "1")`,
  },
  {
    id: 311,
    level: "Intermediate" as const,
    tags: ["caching"],
    question: "Laravel caching kaise kaam karta hai? Drivers aur strategies kya hain?",
    answer: `Laravel Cache facade unified API deta hai multiple cache backends ke liye.

**Cache Drivers:** file, database, redis, memcached, array, dynamodb

**Best practices:**
- Redis = production (fast, persistent, atomic)
- file = development
- array = testing

**Cache strategies:**
- Cache-aside (lazy loading) — miss pe fetch + cache
- Write-through — write pe cache update
- TTL properly set karo (stale data vs performance tradeoff)`,
    code: `<?php
// Basic operations
Cache::put('key', 'value', now()->addHours(1));  // TTL
Cache::get('key');              // null if not found
Cache::get('key', 'default');   // default if not found
Cache::has('key');              // boolean
Cache::forget('key');           // delete
Cache::flush();                 // all cache clear!

// Remember — most common pattern!
$users = Cache::remember('active_users', 3600, function() {
    return User::active()->with('profile')->get();
});
// If cache miss → callback run karo → cache save karo → return

// Remember forever
$config = Cache::rememberForever('app_config', fn() => AppConfig::all());

// Atomic operations
Cache::increment('page_views');
Cache::increment('page_views', 5);  // by 5
Cache::decrement('stock', 1);

// Tags (Redis/Memcached only)
Cache::tags(['users', 'profiles'])->put("user_$id", $user, 3600);
Cache::tags(['users'])->flush();  // all user caches clear!

// Cache keys with variables
$cacheKey = "user_{$userId}_posts_page_{$page}";
$posts = Cache::remember($cacheKey, 1800, fn() => 
    Post::where('user_id', $userId)->paginate(15, page: $page)
);

// Lock (prevent race conditions)
$lock = Cache::lock('process_payment_' . $orderId, 10);
if ($lock->get()) {
    try {
        processPayment($order);
    } finally {
        $lock->release();
    }
}`,
  },
  {
    id: 312,
    level: "Intermediate" as const,
    tags: ["queues"],
    question: "Laravel Jobs aur Queues kaise kaam karte hain?",
    answer: `Queue = time-consuming tasks background mein process karo — user ko wait nahi karna padta.

**Flow:**
1. Job dispatch karo → queue mein add hota hai
2. Queue worker job uthaata hai
3. Background mein execute karta hai

**Drivers:** sync, database, redis, sqs, beanstalkd

**Job features:**
- Retry attempts
- Timeout
- Delay
- Priority chains
- Batches (Laravel 8+)`,
    code: `<?php
// 1. Job create karo
// php artisan make:job SendWelcomeEmail

class SendWelcomeEmail implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public int $tries = 3;         // 3 baar try karo
    public int $timeout = 60;      // 60 seconds max
    public int $backoff = 30;      // retry ke beech 30s wait
    
    public function __construct(
        private User $user  // automatically serialized!
    ) {}
    
    public function handle(Mailer $mailer): void {
        $mailer->to($this->user->email)
               ->send(new WelcomeEmail($this->user));
    }
    
    public function failed(Throwable $e): void {
        // Job fail hone pe — log ya notify
        Log::error("Welcome email failed", ['user' => $this->user->id]);
    }
}

// 2. Dispatch karo
SendWelcomeEmail::dispatch($user);                 // immediately
SendWelcomeEmail::dispatch($user)->delay(now()->addMinutes(5));  // delayed
SendWelcomeEmail::dispatch($user)->onQueue('emails');  // specific queue

// 3. Worker chalao
// php artisan queue:work
// php artisan queue:work --queue=emails,default
// php artisan queue:work --tries=3 --timeout=90

// 4. Job chains
Bus::chain([
    new ValidateOrder($order),
    new ProcessPayment($order),
    new SendConfirmation($order),
    new UpdateInventory($order),
])->dispatch();

// 5. Job batches
Bus::batch([
    new SendEmail($user1),
    new SendEmail($user2),
    new SendEmail($user3),
])->then(fn(Batch $batch) => Log::info('All sent!'))
  ->catch(fn(Batch $batch, Throwable $e) => Log::error('Batch failed'))
  ->dispatch();`,
  },
  {
    id: 313,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Laravel Model Observers kya hain? Kab use karein?",
    answer: `Observer = Model events (creating, created, updating, updated, deleting, deleted, restored, forceDeleted) pe automatically code run karo.

**Model Events:** creating, created, updating, updated, saving, saved, deleting, deleted

**Kab use karein:**
- Audit logs (kaun ne kya change kiya)
- Cache invalidation
- Related data update
- Notifications trigger karna

**Alternative:** Model lifecycle hooks (boot()) — simpler cases ke liye`,
    code: `<?php
// php artisan make:observer UserObserver --model=User
class UserObserver {
    public function created(User $user): void {
        // User create hone pe
        Cache::tags(['users'])->flush();
        $user->notify(new WelcomeNotification());
        AuditLog::create([
            'action'    => 'user_created',
            'model_id'  => $user->id,
            'performed_by' => auth()->id(),
        ]);
    }
    
    public function updated(User $user): void {
        // Sirf relevant changes pe react karo
        if ($user->wasChanged('email')) {
            $user->update(['email_verified_at' => null]);
            $user->sendEmailVerificationNotification();
        }
        
        if ($user->wasChanged('role')) {
            Cache::forget("user_{$user->id}_permissions");
        }
    }
    
    public function deleting(User $user): void {
        // Before delete — cleanup
        $user->posts()->delete();
        $user->comments()->delete();
        Storage::deleteDirectory("users/{$user->id}");
    }
}

// Register karo (AppServiceProvider ya model mein)
class AppServiceProvider extends ServiceProvider {
    public function boot(): void {
        User::observe(UserObserver::class);
    }
}

// Model mein boot() — simple cases
class Post extends Model {
    protected static function booted(): void {
        static::creating(function (Post $post) {
            $post->slug = Str::slug($post->title);
        });
        
        static::updating(function (Post $post) {
            if ($post->isDirty('title')) {
                $post->slug = Str::slug($post->title);
            }
        });
    }
}`,
  },
  {
    id: 314,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Laravel Collections kya hain? Useful methods kaunse hain?",
    answer: `Collection = array ka powerful wrapper — 100+ methods, chainable, lazy evaluation support.

**Eloquent returns Collections automatically.**

**Most useful methods:**
- filter, map, reduce, each
- groupBy, keyBy, pluck
- first, last, find
- sortBy, sortByDesc
- unique, flatten, chunk
- contains, doesntContain
- when, unless (conditional)
- tap (debugging)

**Lazy Collections:** Huge datasets ke liye memory efficient`,
    code: `<?php
$users = User::with('posts')->get();  // Collection

// filter — select
$admins = $users->filter(fn($u) => $u->role === 'admin');

// map — transform
$names = $users->map(fn($u) => $u->name);
$emails = $users->pluck('email');          // shorthand
$emailById = $users->pluck('email', 'id'); // [id => email]

// groupBy
$byRole = $users->groupBy('role');
// ['admin' => Collection, 'user' => Collection]

// first/last
$youngest = $users->sortBy('age')->first();
$oldest = $users->sortByDesc('age')->first();

// unique
$uniqueEmails = $users->unique('email');

// sum, avg, min, max
$totalAge = $users->sum('age');
$avgAge = $users->avg('age');

// contains
$hasAdmin = $users->contains(fn($u) => $u->role === 'admin');
$hasUser = $users->contains('role', 'admin');

// chunk (batches)
$users->chunk(100)->each(function($batch) {
    // process 100 at a time
});

// when (conditional)
$query = User::query();
$query->when($request->role, fn($q, $role) => $q->where('role', $role));
$query->when($request->search, fn($q, $s) => $q->where('name', 'like', "%$s%"));

// tap — debugging
$users->tap(fn($u) => dump("Count: " . $u->count()))
      ->filter(fn($u) => $u->active)
      ->map(fn($u) => $u->name)
      ->all();`,
  },
  {
    id: 315,
    level: "Advanced" as const,
    tags: ["auth"],
    question: "Laravel Sanctum aur Passport mein kya fark hai? API authentication kaise karein?",
    answer: `**Sanctum:**
- Simple token-based auth (API tokens)
- SPA (cookie-based) + Mobile (token-based) dono support
- Laravel ka recommended choice for most apps
- Simple setup, lightweight

**Passport:**
- Full OAuth2 server implementation
- Authorization codes, client credentials, password grant
- Third-party apps ko access dene ke liye (jaise GitHub OAuth)
- Complex, heavyweight

**Kab kya use karein:**
- Mobile app / SPA → Sanctum (token)
- Third-party OAuth server banana → Passport`,
    code: `<?php
// SANCTUM SETUP
// php artisan install:api (Laravel 11)
// composer require laravel/sanctum

// Migration ke baad:
// User model mein HasApiTokens trait

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;
}

// Login endpoint
public function login(Request $request): JsonResponse {
    $request->validate([
        'email'    => 'required|email',
        'password' => 'required',
    ]);
    
    $user = User::where('email', $request->email)->first();
    
    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
    
    // Token create karo (with abilities)
    $token = $user->createToken('api-token', ['read', 'write'])->plainTextToken;
    
    return response()->json([
        'user'  => $user,
        'token' => $token,
    ]);
}

// Logout
public function logout(Request $request): JsonResponse {
    $request->user()->currentAccessToken()->delete();  // current token
    // $request->user()->tokens()->delete();  // all tokens
    return response()->json(['message' => 'Logged out']);
}

// Protected route
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $r) => $r->user());
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

// API request mein header:
// Authorization: Bearer 1|your-token-here`,
  },
  {
    id: 316,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "SoftDelete kya hai? Laravel mein kaise implement karein?",
    answer: `SoftDelete = Record DB se delete nahi hota — deleted_at timestamp set hoti hai. Data "hidden" hota hai normal queries se.

**Fayde:**
- Data recovery possible
- Audit trail
- Foreign key issues nahi
- Cascade delete without actually deleting

**Bhi zaroor jano:** withTrashed(), onlyTrashed(), restore(), forceDelete()`,
    code: `<?php
// Migration
Schema::table('users', function (Blueprint $table) {
    $table->softDeletes();  // adds deleted_at column
});

// Model
class User extends Model {
    use SoftDeletes;  // bas itna!
}

// Usage
$user->delete();    // soft delete — deleted_at set hoti hai

// Normal queries automatically exclude soft-deleted!
User::all();        // only active users
User::find(1);      // null if soft-deleted!

// Soft-deleted bhi include karo
User::withTrashed()->get();
User::withTrashed()->find(1);

// Sirf soft-deleted
User::onlyTrashed()->get();

// Restore
$user = User::onlyTrashed()->find(1);
$user->restore();

// Permanently delete
$user->forceDelete();

// Relation with soft deletes
class Post extends Model {
    use SoftDeletes;
    
    public function user(): BelongsTo {
        return $this->belongsTo(User::class)->withTrashed();
        // Show post even if user is soft-deleted
    }
}

// Global scope check
User::onlyTrashed()
    ->where('deleted_at', '<', now()->subDays(30))
    ->forceDelete();  // 30 din purane permanently delete karo`,
  },
  {
    id: 317,
    level: "Intermediate" as const,
    tags: ["eloquent"],
    question: "Laravel API Resources kya hain? Response transformation kaise karein?",
    answer: `API Resources = Eloquent models/collections ko JSON response mein transform karo — consistent API output.

**Problem without resources:**
- Direct model return → sensitive fields expose
- Inconsistent response structure
- Relationship data control nahi

**Resource features:**
- Fields select karo
- Relationships include/exclude
- Conditional attributes
- Meta data add karo
- Pagination automatic

**php artisan make:resource UserResource**`,
    code: `<?php
// php artisan make:resource UserResource
class UserResource extends JsonResource {
    public function toArray(Request $request): array {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'email'      => $this->email,
            
            // Sirf logged-in admin ko password_changed_at
            'last_password_change' => $this->when(
                $request->user()?->isAdmin(),
                $this->password_changed_at
            ),
            
            // Relationship — sirf agar loaded
            'posts' => PostResource::collection($this->whenLoaded('posts')),
            'profile' => new ProfileResource($this->whenLoaded('profile')),
            
            // Computed
            'full_name' => "{$this->first_name} {$this->last_name}",
            'member_since' => $this->created_at->format('Y'),
            
            // Never expose!
            // 'password' => ... (mat karo!)
        ];
    }
    
    // Extra meta
    public function with(Request $request): array {
        return ['meta' => ['version' => '1.0']];
    }
}

// Collection Resource
class UserCollection extends ResourceCollection {
    public function toArray(Request $request): array {
        return [
            'data' => $this->collection,
            'summary' => [
                'total' => $this->collection->count(),
                'admins' => $this->collection->where('role', 'admin')->count(),
            ],
        ];
    }
}

// Controller
class UserController {
    public function show(User $user): UserResource {
        return new UserResource($user->load('posts', 'profile'));
    }
    
    public function index(): AnonymousResourceCollection {
        return UserResource::collection(User::paginate(15));
        // Automatic pagination meta!
    }
}`,
  },
  {
    id: 304,
    level: "Advanced" as const,
    tags: ["advanced"],
    question: "Laravel Events aur Listeners kya hain?",
    answer: `Events = actions jo application mein hoti hain
Listeners = un actions ke response mein execute hone wale handlers

**Observer Pattern ka implementation.**

**Fayde:**
- Decoupled code — UserRegistered event fire karo, baaki services khud react karein
- Multiple listeners ek event pe
- Queued listeners (background processing)

**Use cases:**
- User register → email bhejo, analytics track karo, welcome gift
- Order placed → inventory update, payment process, notification`,
    code: `// Event create karo
php artisan make:event UserRegistered

// Listener create karo
php artisan make:listener SendWelcomeEmail --event=UserRegistered

// EventServiceProvider mein bind karo
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        TrackAnalytics::class,    // multiple listeners!
        GiveWelcomeBonus::class,
    ],
];

// Event dispatch karo
event(new UserRegistered($user));
// ya:
UserRegistered::dispatch($user);

// Queued Listener (background mein)
class SendWelcomeEmail implements ShouldQueue {
    public function handle(UserRegistered $event) {
        Mail::to($event->user->email)->send(new WelcomeEmail());
    }
}`,
  },
];
