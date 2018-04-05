<!DOCTYPE html>
<html lang="zh">
 <head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
  <script type="text/javascript">

  </script>
  <title>个人中心</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <link href="{{ asset('home/css/forward_201503262210.css') }}" type="text/css" rel="stylesheet" />

  <link rel="apple-touch-icon-precomposed" href="/home/images/apple-touch-icon.png?v=2" />
  <link rel="shortcut icon" href="/home/images/favicon.ico?v=2" type="image/x-icon" />
  <script type="text/javascript" src="{{ asset('/home/js/cdn_detect.js') }}"></script>
  <script>
  // if(!window.CDNReady){var d=new Date;d.setHours(d.getHours()+6);document.cookie="CDNDown=1; domain=ele.me; expires="+d.toUTCString()+"; path=/";if(!window.localStorage.getItem("CDNBackup")){window.localStorage.setItem("CDNBackup",1);location.reload(true)}}
</script>


  @section('css')

  @show









  <div class="full-content-wrapper">

   <div class="container">

    <div class="wash-paper clearfix" id="profile">

     <div class="main-content" style="width: 960px">
      <div class="content-header">

@section('content')



@show


  </div>


  <script type="text/javascript">
    $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
  </script>


@section('js')

@show
</body>
</html>

