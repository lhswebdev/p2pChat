<script>
    import {peer, conn} from './store.js'; 
    
    let theotherpeerid="";
    let connected = false;
    peer.on('connection', function(connection) {
        console.log(connection);
        connection.on("data", (data)=>{
            console.log(data);
        })
        conn.set(connection);
        theotherpeerid = connection.peer;
        connected = true;
    })
    function storeConn() {
        conn.set( peer.connect(theotherpeerid));
        connected = true;
    }
</script>
{#if !connected}
    <input type="text" bind:value={theotherpeerid}>
    <button on:click={storeConn}>connect</button>
{:else}
    <b>Connected with Peer -> {theotherpeerid}</b>
{/if}