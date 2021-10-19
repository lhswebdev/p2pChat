<script>
    import {peer, conn, messages} from './store.js'; 
    
    let theotherpeerid="";
    let messages_value;
    messages.subscribe(value => {
        messages_value = value;
    })
    // Receive connection
    let connected = false;
    peer.on('connection', function(connection) {
        conn.set(connection);
        theotherpeerid = connection.peer;
        connected = true;
    })
    
    // Give connection
    function storeConn() {
        var connection = peer.connect(theotherpeerid)
        conn.set( connection);
        connection.on("data", (msg)=>{
            messages.set([...messages_value, msg])
        })
        connected = true;
    }
</script>
{#if !connected}
    <input type="text" bind:value={theotherpeerid}>
    <button on:click={storeConn}>connect</button>
{:else}
    <b>Connected with Peer -> {theotherpeerid}</b>
{/if}