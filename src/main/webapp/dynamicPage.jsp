<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Dynamic Page</title>
    </head>
    <body>
        <%
            String queryStringValue = request.getParameter("name");
            if(queryStringValue == null || queryStringValue.isEmpty()) {
                queryStringValue = "this Static Page";
            }
        %>
        <h1>Hello from <%= queryStringValue %> </h1>
        
        <h3 class="title" style="color: rgb(0, 140, 186);">Play With It</h3>
        <div style="width: 500px;font-size: medium; font-family: sans-serif;">
            <p>Notice that the server modified the code in this page by replacing 
                the static text following &quot;Hello from&quot; above and replacing it 
            with the QueryString value. Try it yourself:</p>
            <p>Go to the URL 
                in your web browser's address bar and change the name value 
                to something else.</p>
            <p>You can't use spaces between words though, so if you 
                need spaces replace them with the code '%20' 
                (not including the apostrophe symbols).</p>
            <p>Now hit enter and notice that 
                whatever data you substituted for the value in the QueryString gets 
                returned by the server and rendered in the page.</p>
        </div>
        <h4 onclick="location.href='web-basics3.html'" class="title" style="color: rgb(0, 140, 186);">&lt;&lt; Back</h3>

    </body>
</html>
