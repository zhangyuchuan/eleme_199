<?php

namespace App\Http\Middleware\Home;

use Closure;
use Illuminate\Support\Facades\Session;

class DoLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (session('user')){
            return $next($request);
        }else{
            //存住请求路径
            Session::put('paths',$request->getPathInfo());
            return redirect('home/login')->with('errors','请先登录');
        }
    }
}
