<% layout( 'layout' ) -%>
 
<h1><%= title %></h1>
<form action="/create" method="post" accept-charset="utf-8">
  <input type="text" name="content" />
</form>
 
<% todos.forEach( function( todo ){ %>
  <p>
    <span>
      <% if( todo._id == current ){ %>
      <form action="/update/<%= todo._id %>" method="post" accept-charset="utf-8">
        <input type="text" name="content" value="<%= todo.content %>" />
      </form>
      <% }else{ %>
        <a href="/edit/<%= todo._id %>" title="Update this todo item"><%= todo.content %></a>
      <% } %>
    </span>
    <span>
      <a href="/destroy/<%= todo._id %>" title="Delete this todo item">Delete</a>
    </span>
  </p>
<% }); %>
