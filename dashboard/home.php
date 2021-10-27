<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <title>CarolFashion|Boutique</title>
    <!--<title> Responsive Sidebar Menu  | CodingLab </title>-->
    <link rel="stylesheet" href="../css/homedesing.css">
    <!-- Boxicons CDN Link -->
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    <!--impot img logo carol fashion-->
    <link rel="shortcut icon"
        href="https://thumbs.dreamstime.com/b/logotipo-de-la-moda-del-boutique-insignia-para-tienda-ropa-sal%C3%B3n-belleza-o-cosmet%C3%B3logo-103376685.jpg"
        type="image/x-icon">
</head>

<body>
    <?php
    session_start();
    $usuario = $_SESSION['username'];
    if (!isset($usuario)) {
        header("location: ../index.html");
    } 
    ?>
    <div class="sidebar">
        <div class="logo-details">
            <i class='bx bxs-shopping-bags icon'></i>
            <div class="logo_name">Carol Fashion</div>
            <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav-list">
            <li>
                <a href="home.php">
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <a href="proveedores.php">
                    <i class='bx bxs-box'></i>
                    <span class="links_name">Proveedores</span>
                </a>
                <span class="tooltip">Proveedores</span>
            </li>
            <li>
                <a href="empleados.php">
                    <i class='fas fa-users'></i>
                    <span class="links_name">Empleados</span>
                </a>
                <span class="tooltip">Empleados</span>
            </li>
            <li>
                <a href="clientes.php">
                    <i class='bx bxs-user'></i>
                    <span class="links_name">Clientes</span>
                </a>
                <span class="tooltip">Clientes</span>
            </li>
            <li>
                <a href="productos.php">
                    <i class='bx bxs-shopping-bag-alt'></i>
                    <span class="links_name">Productos</span>
                </a>
                <span class="tooltip">Productos</span>
            </li>
            <li>
                <a href="usuarios.php">
                    <i class='bx bxs-user-plus'></i>
                    <span class="links_name">usuarios</span>
                </a>
                <span class="tooltip">usuarios</span>
            </li>

            <li class="profile">
                <a href="../login/salir.php">
                    <span class= "links_name">Cerrar session</span>
                    <i class='bx bx-log-out' id="log_out"></i>
                </a>
            </li>
        </ul>
    </div>
    <section class="home-section">
        <div class="text">Dashboard</div>
        <p>Bienvenido querido usuario, en esta seccion encontraras accesos directos a las diferentes partes de la pagina
        </p>
    </section>
    <script src="js/main.js"></script>
</body>

</html>