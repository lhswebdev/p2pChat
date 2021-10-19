<script>
    import { peer, conn, messages} from './store.js';
    $: messages_value =[];
    messages.subscribe(value => {
        messages_value = value;
    })
    let msg;
    let conn_value;
    conn.subscribe(value => {
        conn_value = value;
    })
    peer.on('connection', function(connection) {
        connection.on("data", (msg)=>{
            messages.set([...messages_value, msg])
        })
        console.log("fdfdfd");
    })

    function sendMsg() {
        conn_value.send(msg)
        messages.set([...messages_value, msg])
    }
</script>

{#each messages_value as peerMessage}
    <p>{peerMessage}</p>

{/each}
<input type="text" bind:value={msg}>
<button on:click={sendMsg(msg)}>Send</button>
