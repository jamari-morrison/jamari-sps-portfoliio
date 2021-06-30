package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the values entered in the form.
    String email = request.getParameter("email");
    String name = request.getParameter("name/company");
    String message = request.getParameter("message");


    // Print the value so you can see it in the server logs.
    System.out.println("Email:" + email);
    System.out.println("name:" + name);
    System.out.println("message:" + message);
    
    //TODO: Send email to myself with this info in it :D

    //redirect back to main page
    response.sendRedirect(request.getHeader("referer"));
  }
}