let emails;
fetch('https://my.api.mockaroo.com/email2.json?key=fed58100&rows=3')
.then (function(response){
  return response.json();
})
.then(function(myJson){
  emails=myJson;
  render();
});

function render(){
  const bodyemail = document.querySelector('#list');
  const snippet = emails.map((email,idx) => `

    <div id=article_${idx}   class="pure-u-1">
			<div id= "changebackg" onclick="this.style.backgroundColor='cdcdcd'" onmouseleave="this.style.backgroundColor='#eee'" class="email-item email-item-selected pure-g">
				<div class="pure-u">
					<img src="${email.pic}"width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="/img/common/tilo-avatar.png">
				</div>
	
				<div  class="pure-u-3-4">
          <h5 id="email_date" data-idx="${idx}"class="email-date">${email.name}  ${email.date}</h5>
					<h4 id="subject" data-idx="${idx}"class="email-subject">${email.subject}</h4>
					<p id="body_para" data-idx="${idx}" class="email-desc">${email.body}</p>
            
				</div>
			</div>
		</div>

  `).join('');
  
  list.innerHTML = snippet;
  
  subject= Array.from(document.querySelectorAll('h4'));
  subject.map(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      idx = btn.dataset.idx;
      document.getElementById('view_subject').innerHTML = emails[idx].subject;
      document.getElementById('view_user').innerHTML = emails[idx].user;
      document.getElementById('view_name').innerHTML = emails[idx].name;
      document.getElementById('view_date').innerHTML = emails[idx].date;
      document.getElementById('view_time').innerHTML = emails[idx].time;
      document.getElementById('view_email').innerHTML = emails[idx].body;

    });
  });
};





