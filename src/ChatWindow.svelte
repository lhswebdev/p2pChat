<script>
    import { peer, conn } from 'store.js';
    $: messages = []
    let msg;
    let conn_value;
    conn.subscribe(value => {
        conn_value = value;
    })
    
    function sendMsg() {
        conn_value.send(msg)
        messages = [...messages, msg]
    }
</script>
<!--
    
    foreach chat in  allchats
    <b>{chat.user}</b>
    <p>{chat.msg}</p>
endforeach
    https://svelte.dev/tutorial/each-block-bindings -->
    {#each messages as peerMessage}
        <p>{peerMessage}</p>

    {/each}
    <input type="text" bind:value={msg}>
    <button on:click={sendMsg(msg)}>Send</button>
    
<!-- https://svelte.dev/tutorial/reactive-assignments -->
