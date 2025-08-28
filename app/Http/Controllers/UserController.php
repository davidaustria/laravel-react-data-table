<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $col = request('col');
        $dir = request('dir');
        if ($col && $dir) {
            $users = User::orderBy($col, $dir)
                ->paginate(10)
                ->appends([
                    'col' => $col,
                    'dir' => $dir
                ]);
        } else {
            $users = User::paginate(10)
                ->appends([
                    'col' => $col,
                    'dir' => $dir
                ]);
        }
        return Inertia::render('users/Index', [
            'users' => $users
        ]);
    }
}
