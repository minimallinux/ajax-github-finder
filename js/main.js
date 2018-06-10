jQuery(document).ready(function($) {
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

 // Make request to Github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'97b26d4e8ed886bd89fa',
        client_secret:'f5ebe96125addf1d85c64d0c72f810011da3401f'
      }
    }).done(function(user){
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'97b26d4e8ed886bd89fa',
          client_secret:'f5ebe96125addf1d85c64d0c72f810011da3401f',
          sort: 'created: asc',
          per_page: 5
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
          <dl class="uk-description-list uk-description-list-divider">
          <dt><strong>${repo.name}</strong>: ${repo.description}</dt>
               </dl>
               <dl class="uk-description-list uk-description-list-divider">
                <dt>Forks: ${repo.forks_count}</dt>
                <dt>Watchers: ${repo.watchers_count}</dt>
                <dt>Stars: ${repo.stargazers_count}</dt>
                </div>
                <dl class="uk-description-list uk-description-list-divider">
                  <a href="${repo.html_url}" target="_blank" class="uk-button uk-button-primary">Repo Page</a>
         </dl>
          `);
        });
      });
    
      $('#profile').html(`
      <dl class="uk-description-list uk-description-list-divider">
         <dt>${user.name}</dt>
          </dl>
          <div class="uk-column-1-2">
              <p class="uk-column-span"><img class="thumbnail avatar" src="${user.avatar_url}"></p>
          </div>
      <a target="_blank" class="uk-button uk-button-primary" href="${user.html_url}">View Profile</a>
      <br /><br />
              <div class="uk-column-1-9">
              <span class="label label-default">Public Repos: ${user.public_repos}</span>
              <span class="label label-primary">Public Gists: ${user.public_gists}</span>
              <span class="label label-success">Followers: ${user.followers}</span>
              <span class="label label-info">Following: ${user.following}</span>
              <br><br>
              <ul class="uk-list uk-list-divider">
             <li>Company: ${user.company}</li>
             <li>Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
             <li>Location: ${user.location}</li>
             <li>Member Since: ${user.created_at}</li>
              </ul>
              </div>
        <dl class="uk-description-list uk-description-list-divider">
        <dt>Latest Repos</dt>
        </dl>
        <div id="repos"></div>
      `);
    });
  });
 });

   
/* $('#searchUser').on('keyup', function(e){
    let username = e.target.value;
    //Make request to Github
    $.ajax({
     url:'https://api.github.com/users/'+username,
     data:{
       client_id:'7dffae885a9f27c53510',
       client_secret:'775ead92829a4a000735253835bcad0dfe5eee30'
     }
 }).done(function(user){
     $('#profile').html(`
     <dl class="uk-description-list uk-description-list-divider">
 <dt>$(user.name)</dt>
 <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
 <dt>Description term</dt>
 <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
 <dt>Description term</dt>
 <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
</dl>
     `)
     /*$.ajax({
       url:'https://api.github.com/users/'+username+'/repos',
       data:{
         client_id:'7dffae885a9f27c53510',
         client_secret:'775ead92829a4a000735253835bcad0dfe5eee30',
         sort: 'created: asc',
         per_page: 5
       }
     });*/tml 