<!DOCTYPE html>
<!-- Created by CodingLab |www.youtube.com/c/CodingLabYT-->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <!--<title> Login and Registration Form in HTML & CSS | CodingLab </title>-->
    <link rel="stylesheet" href="../css/logindesing.css">
    <!-- Fontawesome CDN Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carol Fashion|Boutique</title>
    <link rel="shortcut icon"
        href="https://thumbs.dreamstime.com/b/logotipo-de-la-moda-del-boutique-insignia-para-tienda-ropa-sal%C3%B3n-belleza-o-cosmet%C3%B3logo-103376685.jpg"
        type="image/x-icon">
   </head>
<body>
  <div class="container">
    <input type="checkbox" id="flip">
    <div class="cover">
      <div class="front">
        <img src="../img/img8.jpeg" alt="">
        <div class="text">
          <span class="text-1">Every new friend is a <br> new adventure</span>
          <span class="text-2">Let's get connected</span>
        </div>
      </div>
      <div class="back">
        <img class="backImg" src="../img/img8.jpeg" alt="">
        <div class="text">
          <span class="text-1">Complete miles of journey <br> with one step</span>
          <span class="text-2">Let's get started</span>
        </div>
      </div>
    </div>
    <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
          <form action="validacion.php" method = "post">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" name = "usuario" placeholder="Ingrese su usuario" required>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" name = "password" placeholder="Ingrese su contraseña" required>
              </div>
              <div class="button input-box">
                <input type="submit" value="Ingresar">
              </div>
            </div>
        </form>
      </div>
      <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="../js/sweetsalerts.js"></script>
</body>
</html>
