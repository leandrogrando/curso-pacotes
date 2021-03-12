<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function showLoginForm() {
        return Inertia::render('Auth/Login');
    }

    public function showRegisterForm() {
        return Inertia::render('Auth/Register');
    }

    public function login(Request $req) {
        if (Auth::attempt(['email' => $req->email, 'password' => $req->password], $req->remember)) {
            return redirect()->intended('/');
        } else {
            return redirect()->back()->withErrors(['credentials' => 'Credenciais inválidas']);
        }
    }

    public function register(Request $req) {
        $data = $req->all();
        $data['password'] = Hash::make($req->password);
        $user = User::create($data);
        Auth::login($user, $req->remember);
        return redirect()->intended('/');
    }

    public function logout(Request $req) {
        Auth::logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();

        return redirect()->route('login.form');
    }
}
