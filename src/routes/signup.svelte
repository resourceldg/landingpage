<script>
	
    import { goto, stores } from "@sapper/app";
    const { session } = stores();
  
    let password = "";
    let confirm_pass = "";
    let username = ""; 
    let email = "";
    let phone="";
    let error;
  
    const handleSignup = async () => {
      
      if (password === confirm_pass){
        const response = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ username, email, password}),
        });
    
        const parsed = await response.json();
    
        if (parsed.error) {
          error = parsed.error;
        } else {
          $session.token = parsed.token;
          $session.user= parsed.user.username;
          goto("/profile");
        }

      }else{
        placeholderpass="password confirm not match",
        placeholderpassconfirm="please retry passwords"

      }
    };
    

    
  </script>
  
    
    <form on:submit|preventDefault="{handleSignup}" method="post">
      <label>
        Nombre:
        <input type="username" placeholder= "Nombre" bind:value="{username}" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="email" bind:value="{email}" />
      </label>

      <label>
        Contraseña:
        <input id= "pass" name= "password" type="password" placeholder= "password" bind:value="{password}"/>
      </label>

      <label>
        Confirme Contraseña:
        <input id= "confirm_pass" name="confirm_pass" type="password" placeholder="Confirme contraseña" bind:value="{confirm_pass}" />  
      </label> 

      <!-- <label>
        Teléfono:
        <input type="phone" placeholder="telefono" bind:value={phone}/>
      </label>     -->
      
      <button type="submit" onclick=submit >Signup</button>
      
    </form>
    
    
    {#if error}
    <p>{error}</p>
    {/if}