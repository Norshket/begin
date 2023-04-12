<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function __invoke()
    {
        $config = [
            'user' => null,
            'appName' => config('app.name'),
            'appUrl' => config('app.url'),
            'apiUrl' => config('app.url') . '/api',
            'locale' => app()->getLocale(),
            'locales' => config('app.locales')
        ];

        return view('spa', ['config' => $config]);
    }
}
