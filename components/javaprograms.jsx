const javaprograms = [
    {
      id: 1,
      name: 'Program 1',
      files: [
        {
          name: 'ArrayListDemo.java',
          language: 'java',
          content: String.raw`
            // Program 1: Create an ArrayList, add elements, remove elements, sort the list, and use the toArray() method.
            import java.util.ArrayList;
            import java.util.Collections;
  
            public class ArrayListDemo {
                public static void main(String[] args) {
                    ArrayList<String> list = new ArrayList<>();
                    list.add("Banana");
                    list.add("Apple");
                    list.add("Mango");
                    list.add("Orange");
  
                    System.out.println("Original List: " + list);
  
                    list.remove("Mango");
                    System.out.println("After removing Mango: " + list);
  
                    Collections.sort(list);
                    System.out.println("Sorted List: " + list);
  
                    String[] arr = new String[list.size()];
                    list.toArray(arr);
                    System.out.println("Array: ");
                    for (String s : arr) {
                        System.out.println(s);
                    }
                }
            }
          `,
        },
      ],
    },
    {
      id: 2,
      name: 'Program 2',
      files: [
        {
          name: 'RandomNumbers.java',
          language: 'java',
          content: String.raw`
            // Program 2: Read random numbers in a given range that are multiples of 2 and 5, then sort by tens place.
            import java.util.ArrayList;
            import java.util.Collections;
            import java.util.Comparator;
            import java.util.Random;
  
            public class RandomNumbers {
                public static void main(String[] args) {
                    ArrayList<Integer> numbers = new ArrayList<>();
                    Random rand = new Random();
                    for (int i = 0; i < 10; i++) {
                        int num = rand.nextInt(100);
                        if (num % 2 == 0 && num % 5 == 0) {
                            numbers.add(num);
                        }
                    }
                    System.out.println("Original Numbers: " + numbers);
                    Collections.sort(numbers, new Comparator<Integer>() {
                        public int compare(Integer o1, Integer o2) {
                            return (o1 / 10) % 10 - (o2 / 10) % 10;
                        }
                    });
                    System.out.println("Sorted by Tens Place: " + numbers);
                }
            }
          `,
        },
      ],
    },
    {
      id: 3,
      name: 'Program 3',
      files: [
        {
          name: 'UserDefinedClassDemo.java',
          language: 'java',
          content: String.raw`
            // Program 3: Store user-defined classes in a collection.
            import java.util.ArrayList;
  
            class Student {
                String name;
                int rollNo;
  
                Student(String name, int rollNo) {
                    this.name = name;
                    this.rollNo = rollNo;
                }
  
                public String toString() {
                    return "Name: " + this.name + ", Roll No: " + this.rollNo;
                }
            }
  
            public class UserDefinedClassDemo {
                public static void main(String[] args) {
                    ArrayList<Student> students = new ArrayList<>();
                    students.add(new Student("John", 101));
                    students.add(new Student("Jane", 102));
                    students.add(new Student("Tom", 103));
  
                    for (Student s : students) {
                        System.out.println(s);
                    }
                }
            }
          `,
        },
      ],
    },
    {
      id: 4,
      name: 'Program 4',
      files: [
        {
          name: 'StringConstructorsDemo.java',
          language: 'java',
          content: String.raw`
            // Program 4: Use different types of String class constructors.
            public class StringConstructorsDemo {
                public static void main(String[] args) {
                    char[] charArray = {'J', 'A', 'V', 'A'};
                    String s1 = new String(charArray);
                    String s2 = new String(s1);
                    String s3 = new String("Java Programming");
  
                    System.out.println("String from char array: " + s1);
                    System.out.println("String from another String: " + s2);
                    System.out.println("String from String literal: " + s3);
                }
            }
          `,
        },
      ],
    },
    {
      id: 5,
      name: 'Program 5',
      files: [
        {
          name: 'StringMethodsDemo.java',
          language: 'java',
          content: String.raw`
            // Program 5: String manipulation, extraction, comparison, and search methods.
            public class StringMethodsDemo {
                public static void main(String[] args) {
                    String s = "Java Programming";
  
                    // Character Extraction
                    System.out.println("Character at index 5: " + s.charAt(5));
  
                    // String Comparison
                    System.out.println("Comparing 'Java' with 'java': " + "Java".compareTo("java"));
  
                    // String Search
                    System.out.println("Index of 'Programming': " + s.indexOf("Programming"));
  
                    // String Modification
                    System.out.println("Replace 'Java' with 'Python': " + s.replace("Java", "Python"));
                }
            }
          `,
        },
      ],
    },
    {
      id: 6,
      name: 'Program 6',
      files: [
        {
          name: 'StringBufferDemo.java',
          language: 'java',
          content: String.raw`
            // Program 6: Use of StringBuffer methods.
            public class StringBufferDemo {
                public static void main(String[] args) {
                    StringBuffer sb = new StringBuffer("Hello");
  
                    // Append
                    sb.append(" World");
                    System.out.println("After Append: " + sb);
  
                    // Insert
                    sb.insert(5, " Java");
                    System.out.println("After Insert: " + sb);
  
                    // Replace
                    sb.replace(0, 5, "Hi");
                    System.out.println("After Replace: " + sb);
  
                    // Reverse
                    sb.reverse();
                    System.out.println("After Reverse: " + sb);
                }
            }
          `,
        },
      ],
    },
    {
      id: 7,
      name: 'Program 7',
      files: [
        {
          name: 'SwingEventHandlingDemo.java',
          language: 'java',
          content: String.raw`
            // Program 7: Swing event handling with two buttons.
            import javax.swing.*;
            import java.awt.event.ActionEvent;
            import java.awt.event.ActionListener;
  
            public class SwingEventHandlingDemo {
                public static void main(String[] args) {
                    JFrame frame = new JFrame("Swing Demo");
                    JButton btnAlpha = new JButton("Alpha");
                    JButton btnBeta = new JButton("Beta");
  
                    btnAlpha.setBounds(50, 100, 95, 30);
                    btnBeta.setBounds(150, 100, 95, 30);
  
                    btnAlpha.addActionListener(new ActionListener() {
                        public void actionPerformed(ActionEvent e) {
                            JOptionPane.showMessageDialog(frame, "Alpha pressed");
                        }
                    });
  
                    btnBeta.addActionListener(new ActionListener() {
                        public void actionPerformed(ActionEvent e) {
                            JOptionPane.showMessageDialog(frame, "Beta pressed");
                        }
                    });
  
                    frame.add(btnAlpha);
                    frame.add(btnBeta);
                    frame.setSize(400, 400);
                    frame.setLayout(null);
                    frame.setVisible(true);
                    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                }
            }
          `,
        },
      ],
    },
    {
      id: 8,
      name: 'Program 8',
      files: [
        {
          name: 'Servlet.java',
          language: 'java',
          content: String.raw`
            // Program 8: Display a greeting message using Servlet.
            import java.io.IOException;
            import java.io.PrintWriter;
            import javax.servlet.ServletException;
            import javax.servlet.http.HttpServlet;
            import javax.servlet.http.HttpServletRequest;
            import javax.servlet.http.HttpServletResponse;
  
            public class Servlet extends HttpServlet {
                protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                    response.setContentType("text/html");
                    PrintWriter out = response.getWriter();
                    String user = request.getParameter("user");
                    out.println("<h1>Hello " + user + "!</h1>");
                    out.println("<p>How Are You?</p>");
                }
            }
          `,
        },
        {
          name: 'web.xml',
          language: 'xml',
          content: String.raw`
            <web-app>
              <servlet>
                <servlet-name>GreetingServlet</servlet-name>
                <servlet-class>Servlet</servlet-class>
              </servlet>
              <servlet-mapping>
                <servlet-name>GreetingServlet</servlet-name>
                <url-pattern>/greet</url-pattern>
              </servlet-mapping>
            </web-app>
          `,
        },
        {
          name: 'index.html',
          language: 'html',
          content: String.raw`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Servlet Example</title>
            </head>
            <body>
                <h1>Enter Your Name</h1>
                <form action="greet">
                    <input type="text" name="user">
                    <input type="submit" value="Greet Me">
                </form>
            </body>
            </html>
          `,
        },
      ],
    },
    {
      id: 9,
      name: 'Program 9',
      files: [
        {
          name: 'StudentServlet.java',
          language: 'java',
          content: String.raw`
            // Program 9: Display student details using Servlet.
            import java.io.IOException;
            import java.io.PrintWriter;
            import javax.servlet.ServletException;
            import javax.servlet.http.HttpServlet;
            import javax.servlet.http.HttpServletRequest;
            import javax.servlet.http.HttpServletResponse;
  
            public class StudentServlet extends HttpServlet {
                protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                    response.setContentType("text/html");
                    PrintWriter out = response.getWriter();
                    String name = request.getParameter("name");
                    String usn = request.getParameter("usn");
                    String marks = request.getParameter("marks");
                    out.println("<h1>Student Details</h1>");
                    out.println("<p>Name: " + name + "</p>");
                    out.println("<p>USN: " + usn + "</p>");
                    out.println("<p>Total Marks: " + marks + "</p>");
                }
            }
          `,
        },
        {
          name: 'web.xml',
          language: 'xml',
          content: String.raw`
            <web-app>
              <servlet>
                <servlet-name>StudentServlet</servlet-name>
                <servlet-class>StudentServlet</servlet-class>
              </servlet>
              <servlet-mapping>
                <servlet-name>StudentServlet</servlet-name>
                <url-pattern>/student</url-pattern>
              </servlet-mapping>
            </web-app>
          `,
        },
        {
          name: 'student.html',
          language: 'html',
          content: String.raw`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Student Details</title>
            </head>
            <body>
                <h1>Enter Student Details</h1>
                <form action="student">
                    <p>Name: <input type="text" name="name"></p>
                    <p>USN: <input type="text" name="usn"></p>
                    <p>Total Marks: <input type="text" name="marks"></p>
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
          `,
        },
      ],
    },
    {
      id: 10,
      name: 'Program 10',
      files: [
        {
          name: 'CookieDemo.java',
          language: 'java',
          content: String.raw`
            // Program 10: Create and read a cookie for a given cookie name "EMPID" with value "AN2356".
            import java.io.IOException;
            import javax.servlet.ServletException;
            import javax.servlet.http.Cookie;
            import javax.servlet.http.HttpServlet;
            import javax.servlet.http.HttpServletRequest;
            import javax.servlet.http.HttpServletResponse;
  
            public class CookieDemo extends HttpServlet {
                protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                    Cookie empid = new Cookie("EMPID", "AN2356");
                    response.addCookie(empid);
                    response.setContentType("text/html");
                    response.getWriter().println("<h1>Cookie 'EMPID' has been set with value 'AN2356'</h1>");
                }
            }
          `,
        },
        {
          name: 'web.xml',
          language: 'xml',
          content: String.raw`
            <web-app>
              <servlet>
                <servlet-name>CookieDemo</servlet-name>
                <servlet-class>CookieDemo</servlet-class>
              </servlet>
              <servlet-mapping>
                <servlet-name>CookieDemo</servlet-name>
                <url-pattern>/setcookie</url-pattern>
              </servlet-mapping>
            </web-app>
          `,
        },
        {
          name: 'cookie.html',
          language: 'html',
          content: String.raw`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Cookie Demo</title>
            </head>
            <body>
                <h1>Click the button to set a cookie</h1>
                <form action="setcookie">
                    <input type="submit" value="Set Cookie">
                </form>
            </body>
            </html>
          `,
        },
      ],
    },
    {
      id: 11,
      name: 'Program 11',
      files: [
        {
          name: 'StudentDatabase.java',
          language: 'java',
          content: String.raw`
            // Program 11: Insert data into Student database and retrieve based on particular queries.
            import java.sql.Connection;
            import java.sql.DriverManager;
            import java.sql.PreparedStatement;
            import java.sql.ResultSet;
            import java.sql.Statement;
  
            public class StudentDatabase {
                public static void main(String[] args) {
                    try {
                        Class.forName("com.mysql.cj.jdbc.Driver");
                        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
  
                        // Insert data
                        PreparedStatement stmt = con.prepareStatement("INSERT INTO students (name, usn, marks) VALUES (?, ?, ?)");
                        stmt.setString(1, "John");
                        stmt.setString(2, "1BI18CS001");
                        stmt.setInt(3, 85);
                        stmt.executeUpdate();
  
                        // Retrieve data
                        Statement stmt2 = con.createStatement();
                        ResultSet rs = stmt2.executeQuery("SELECT * FROM students WHERE usn='1BI18CS001'");
                        while (rs.next()) {
                            System.out.println("Name: " + rs.getString(1) + ", USN: " + rs.getString(2) + ", Marks: " + rs.getInt(3));
                        }
  
                        con.close();
                    } catch (Exception e) {
                        System.out.println(e);
                    }
                }
            }
          `,
        },
      ],
    },
    {
      id: 12,
      name: 'Program 12',
      files: [
        {
          name: 'LoginValidation.jsp',
          language: 'jsp',
          content: String.raw`
            // Program 12: Design a login page and validate USER_ID and PASSWORD using JSP and database.
            <%@ page import="java.sql.*" %>
            <html>
            <body>
                <form method="post" action="validate.jsp">
                    User ID: <input type="text" name="userid"><br>
                    Password: <input type="password" name="password"><br>
                    <input type="submit" value="Login">
                </form>
            </body>
            </html>
          `,
        },
        {
          name: 'validate.jsp',
          language: 'jsp',
          content: String.raw`
            <%@ page import="java.sql.*" %>
            <html>
            <body>
                <%
                    String userid = request.getParameter("userid");
                    String password = request.getParameter("password");
                    try {
                        Class.forName("com.mysql.cj.jdbc.Driver");
                        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
                        PreparedStatement stmt = con.prepareStatement("SELECT * FROM users WHERE userid=? AND password=?");
                        stmt.setString(1, userid);
                        stmt.setString(2, password);
                        ResultSet rs = stmt.executeQuery();
                        if (rs.next()) {
                            out.println("Login Successful!");
                        } else {
                            out.println("Invalid User ID or Password");
                        }
                        con.close();
                    } catch (Exception e) {
                        out.println(e);
                    }
                %>
            </body>
            </html>
          `,
        },
      ],
    },
  ];
  
  export default javaprograms;
  