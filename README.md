# jstabs
Tabs with vanilla js
https://twigfiddle.com/h90nzf - template


Undefined value means the

Variable used in the code doesn't exist
Variable is not assigned to any value
Property doesn't exist

Undefined variables are those that are declared in the program but have not been given any value. 
If the program tries to read the value of an undefined variable, an undefined value is returned.

-----------------

const data = {
names: ['A','B','C'],
enrolled: true,
marksss: {
'A': [1,1,1],
'B': [2,2,2],
'C': [3,3,3],
}
}

const {names, enrolled=false, marks} = data;

-------------------

<div class="articles list">
<div class="node"></div><div class="node"></div><div class="node"></div>
</div>
<div class="blog list">
<div class="node"></div><div class="node"></div><div class="node"></div>
</div>
jQuery('.articles .node')
jQuery('.articles > .node')
jQuery('.articles *')
jQuery('.node').filter('.articles *')


////////////////////
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
    let output = '';
                    users.forEach(function(user) {
                        output += `
                            <div class="user"><h3 class="user_name">
                                ${user.name}
                            </h3><div class="user_email">${user.email}</div></div>
                        `;
                    });
                    document.getElementById("node").innerHTML = output;
   
    })
/////////////////////