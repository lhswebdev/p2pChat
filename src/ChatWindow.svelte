<script>
    import { peer, conn } from 'store.js';
    $: allChats = []
    let msg;
    
    // conn.on('open', function() {
    //   // Receive messages
    //   conn.on('data', function(data) {
    //     console.log('Received', data);
            
    //   });

    //   // Send messages
    //   conn.send('Hello!');
    // });
    //https://svelte.dev/tutorial/auto-subscriptions
    let conn_value;
    conn.subscribe(value => {
        conn_value = value;
    })
    
    function sendMsg() {
        conn_value.send(msg)
    }
</script>
<!--
    
    foreach chat in  allchats
    <b>{chat.user}</b>
    <p>{chat.msg}</p>
endforeach
    https://svelte.dev/tutorial/each-block-bindings -->

    <input type="text" bind:value={msg}>
    <button on:click={sendMsg(msg)}>Send</button>
    
<!-- https://svelte.dev/tutorial/reactive-assignments -->
