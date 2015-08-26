function Graph(V){
	this.V = V;


	this.adj = new Array(V);
	for(var i=0; i<V; i++) {
    	this.adj[i] = new Array();
	}

	this.addEdge = function (v, w){
		this.adj[v].push(w);
		this.adj[w].push(v);
	}


	this.greedyColoring = function(){
		var result = [];

		
    	result[0]  = 0;

    	
    	for (var u = 1; u < this.V; u++)
        	result[u] = -1;  

        var available = new Array(this.V);
        for (var cr = 0; cr < this.V; cr++)
        	available[cr] = false;


    	for (var u = 1; u < V; u++){

    		for (var i  in this.adj[u]) {  
    			if (result[this.adj[i]] != -1){
 					available[result[this.adj[u][i]]] = true;   				
    			}
    		}
    	

    		var cr;
        		for (cr = 0; cr < this.V; cr++)
            		if (available[cr] == false)
                		break;
 
        	result[u] = cr; 
 

        	for(var i in this.adj[u]){
        		if (result[this.adj[i]] !== -1){
 					available[result[this.adj[u][i]]] = false;   				
    			}	
        	}

    	}

    	
   		for (var u = 0; u < this.V; u++)
        	console.log("Vertex " + u + " --->  Color " + result[u]);
	}

}



function main(){
	var instance = new Graph(5);
	instance.addEdge(0, 1);
    instance.addEdge(0, 2);
    instance.addEdge(1, 2);
    instance.addEdge(1, 3);
    instance.addEdge(2, 3);
    instance.addEdge(3, 4);

    console.log("Coloring of Graph 1 \n");
    instance.greedyColoring();

    var instance2 = new Graph(5);
    instance2.addEdge(0, 1);
    instance2.addEdge(0, 2);
    instance2.addEdge(1, 2);
    instance2.addEdge(1, 4);
    instance2.addEdge(2, 4);
    instance2.addEdge(4, 3);
    console.log("\nColoring of Graph 2 \n");
    instance2.greedyColoring();
}

main();

