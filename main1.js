re<%- include('layout/header') %>


<div class="container">
    <div class="row my-4">
       <div class="col-lg-12">
       <% if (message) { %>
         <div class="alert alert-dismissible fade show alert -<%= message.type %> "
            role="alert">
            <button class="btn-close" type="button" data-bs-dismissible="alert"
             aria-label="Close"></button>
            <strong><%= message.message %></strong>
         </div>
         
         
      <% } %>
          <div class="table-responsive">
          <% if (users != '') { %>
                          <table class="table table-striped text-center">
                <thread>
                   <tr class="table-dark">
                      <th>ID</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>E-Mail</th>
                      <th>Phone</th>
                      <th>Action</th>
                </thread>
                <tbody>
                   <% users.forEach((row, index) => { %>
                      <tr>
                       <td><%= index %></td>
                       <td><img src="<%= row.image %>" width="50" class="img-thumbnail" /></td>
                       <td><%= row.name %></td>
                       <td><%= row.email %></td>
                       <td><%= row.phone %></td>
                       <td>
                           <a href="/edit/<%= row.id %>" class="text-success"><i class="fas fa-edit fa-lg mx-1"></i><a/>
                           <a href="/delete/<%= row.id %>" class="text-danger"><i class="fas fa-trash fa-lg mx-1"></i><a/>
                       </td>
                    </tr>
                   <% }) %>

                </tbody>

             </table>
          <% } else { %>
               <h1 class="text-center text-secondary mt-5"> No users found in the database!</h1>
            <% } %>
          </div>
       </div>
    </div>
</div>

<%- include('layout/footer') %>
