package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/randomMessage")
public class RandomMessageServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    List<String> possibleMessages = new ArrayList<>();
    Gson gson = new Gson();
    possibleMessages.add("I onced flipped a bottle on top of another bottle");
    possibleMessages.add("The best Java IDE is IntelliJ. Eclipse isn't even an option");
    possibleMessages.add("This button took me a little over 5 hours total to debug");
    possibleMessages.add("My favorite manga is Berserk");
    possibleMessages.add("My favorite anime is either your lie in april or attack on titan");
    possibleMessages.add("My favorite anime movie is Maquia: The promised flower blooms");
    possibleMessages.add("My favorite game is Final Fantasy VII remake");
    possibleMessages.add("Did you know cherry blossoms fall at a rate of 5 centimeters per second?");
    possibleMessages.add("Griffith did everything wrong");


    possibleMessages.add("Just Monika.");


   // String responseStr = "<h1>And today's message is:"+todaysMessage +" </h1>";
    response.setContentType("application/json;");
    String json = gson.toJson(possibleMessages);
    response.getWriter().println(json);
  }
}
