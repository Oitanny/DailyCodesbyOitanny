mystring=""
$(document).ready(function(){
    $('#fetchBtn').click(function(){
        $.get('pets.json',function(data,status){
            data.forEach(element => {
                mystring+=`<div class="container border border-secondary p-3 mt-5 w-50">
                <i class="fa fa-heart text-danger fs-3"></i>
                <p class="text-center fs-3">
                Name: ${JSON.stringify(element.name)}<br>
                Age: ${JSON.stringify(element.age)}<br>
                Type: ${JSON.stringify(element.type)}<br>
                Weight: ${JSON.stringify(element.weight)}<br>
                Likes: ${JSON.stringify(element.likes)}<br>
                </p>
            </div>`
            });
            $('#pet-data').html(()=>{
                return mystring
            }
            )
        })
    })
})