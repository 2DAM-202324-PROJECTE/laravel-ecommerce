<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Error')</title>
    @vite('resources/css/app.css')
</head>
<body class="h-full bg-white">
<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
        <p class="text-base font-semibold text-blue-600">@yield('code', '404')</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">@yield('title', 'Page not found')</h1>
        <p class="mt-6 text-base leading-7 text-gray-600">@yield('message', "Sorry, we couldn’t find the page you’re looking for.")</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="{{ url('/') }}" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Go back home</a>
            <a href="{{ url('/contact') }}" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
        </div>
    </div>
</main>
</body>
</html>
