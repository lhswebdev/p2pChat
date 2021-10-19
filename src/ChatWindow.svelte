<script>
    import { peer, conn } from './store.js';
    $: messages = []
    let msg;
    let conn_value;
    conn.subscribe(value => {
        conn_value = value;
    })
    peer.on('connection', function(connection) {
        connection.on("data", (msg)=>{
            messages = [...messages, msg]
        })
    })
    function sendMsg() {
        conn_value.send(msg)
        messages = [...messages, msg]
    }
</script>

{#each messages as peerMessage}
    <p>{peerMessage}</p>

{/each}
<input type="text" bind:value={msg}>
<button on:click={sendMsg(msg)}>Send</button>
