package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    List<String> possibleMessages = new ArrayList<>();
    possibleMessages.add("It's a good day!");
    possibleMessages.add("It's a good night!");
    possibleMessages.add("Don't wheelie, kids...");
    possibleMessages.add("Yeah outside is cool, but can it solve NP-Hard problems?");


    int numMessages = possibleMessages.size();
    int randomIndex= (int)(Math.random() * numMessages);
    String todaysMessage = possibleMessages.get(randomIndex);
    String responseStr = "<h1>And today's message is:"+todaysMessage +" </h1>";
    response.setContentType("text/html;");
    response.getWriter().println(responseStr);
  }
}
