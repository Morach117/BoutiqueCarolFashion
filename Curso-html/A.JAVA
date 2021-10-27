package com.example.cuestionarioapp;
import androidx.appcompat.app.AppCompatActivity;
// En esta parte del código importamos las librerías correspondientes.
Bundle, view.View, Button, RadioButton, TextView y Toast para que no marque
ningun error al momento de utilizarlos.
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;
//En este apartado del código, declaramos los components y variables que se
utilizaran en donde se plasman los elementos de las preguntas, las respuestas,
los RadioButtons y el Button que agregamos a nuestra vista.
public class MainActivity extends AppCompatActivity {
 private TextView tv;
 private TextView tv1;
 private RadioButton rb1, rb2, rb3;
 private TextView tv2;
 private RadioButton rb4, rb5, rb6;
 private TextView tv3;
 private RadioButton rb7, rb8, rb9;
 private Button bt1;
 @Override
 protected void onCreate(Bundle savedInstanceState) {
 super.onCreate(savedInstanceState);
 setContentView(R.layout.activity_main);
// En esta parte del código a cada objeto se le asigna el id que le
correponde, es decir el id que le pusimos a cada componente en nuestro archivo
xml, esto para poder enlazar cada uno de ellos.
        tv1 = findViewById(R.id.question_1);
        rb1 = findViewById(R.id.answer_1);
        rb2 = findViewById(R.id.answer_2);
        rb3 = findViewById(R.id.answer_3);
        tv2 = findViewById(R.id.question_2);
        rb4 = findViewById(R.id.answer_4);
        rb5 = findViewById(R.id.answer_5);
        rb6 = findViewById(R.id.answer_6);
        tv3 = findViewById(R.id.question_3);
        rb7 = findViewById(R.id.answer_7);
        rb8 = findViewById(R.id.answer_8);
        rb9 = findViewById(R.id.answer_9);
        bt1 = findViewById(R.id.qualify);

 }
// Aquí se declara un método público (public void, 3 variables de tipo
int(entero), el cual nos permite obtener valores y retornar una respuesta, en
este caso una calificación.
 public void Calificar(View view) {
 int pt1 = 0;
 int pt2 = 0;
 int pt3 = 0;
// En esta parte del código, una condición if lo que hace es verificar si la
respuesta seleccionada de cada pregunta es la correcta (true) y asignarle
puntaje.
 if (rb2.isChecked() == true) {
 pt1 = 3;
 }
 if (rb4.isChecked() == true) {
 pt2 = 3;
 }
 if (rb9.isChecked() == true) {
 pt3 = 4;
 }
//En esta parte del código se declaró una variable de tipo entero (int result)
donde result almacena la suma de los puntajes obtenidos de las respuestas y
los suma para poder dar una calificación.
 int result = pt1 + pt2 + pt3;
// Este if lo que realiza es verificar que el resultado obtenido de las
preguntas fue aprobatorio, dependiendo si el resultado es mayor o igual a 6 o
menor o igual a 5, y el toast lo que hace es mostrar un mensaje flotante con
la calificación obtenida al responder las tres preguntas sean respuestas
correctas o incorrectas.
 if (result >= 6) {
 String resultado = String.valueOf(result);
 Toast.makeText(this, "Tu calificación es: " + result,
Toast.LENGTH_LONG).show();
 } else if(result <=5)
 Toast.makeText(this, "Tu calificación es: " + result,
Toast.LENGTH_LONG).show();
 }
}