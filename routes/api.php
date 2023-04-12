<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// dd(123);
Route::post('login', function (Request $request) {
    dd($request->all());
});


// Route::group(['middleware' => 'guest'], function () {
  
//     Route::post('register', [RegisterController::class, 'register']);

//     Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
//     Route::post('password/reset', [ResetPasswordController::class, 'reset']);

//     Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
//     Route::post('email/resend', [VerificationController::class, 'resend']);

//     Route::get('users/registerData', [UserController::class, 'registerData']);
//     Route::post('users/register', [UserController::class, 'register']);

//     Route::post('oauth/{driver}', [OAuthController::class, 'redirect']);
//     Route::get('oauth/{driver}/callback', [OAuthController::class, 'handleCallback'])->name('oauth.callback');
// });


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
