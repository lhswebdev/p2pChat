<script>
import Peer from 'peerjs';

    import {peer, conn} from 'store.js'; 
    let theotherpeerid;
    function storeConn() {
        var pconn = peer.connect(theotherpeerid)
        conn.set( pconn )
    }
</script>

<input type="text" bind:value={theotherpeerid}>

<button on:click={storeConn}>connect</button>