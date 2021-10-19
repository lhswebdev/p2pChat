import { writable } from 'svelte/store';
import randomWords from 'random-words';
export const peer = new window.Peer(randomWords());
export const conn = writable("");
export const messages = writable([]);
