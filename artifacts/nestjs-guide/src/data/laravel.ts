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
