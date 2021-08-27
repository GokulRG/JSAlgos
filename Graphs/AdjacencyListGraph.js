class Graph {
	constructor() {
		this.graph = {};
	}

	addVertex(vertexName) {
		if (!this.graph[vertexName]) {
			this.graph[vertexName] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		// In case of undirected graph vertex2 should be added inside the list of vertex1 also.
		if (!this.graph[vertex1] || !this.graph[vertex2]) {
			return;
		}

		this.graph[vertex1].push(vertex2);
		this.graph[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		// In case of undirected graph vertex2 should be added inside the list of vertex1 also.
		if (!this.graph[vertex1] || !this.graph[vertex2]) {
			return;
		}

		// Remove vertex 2 from vertex 1 array
		for (let i = 0; i < this.graph[vertex1].length; i++) {
			if (this.graph[vertex1][i] === vertex2) {
				this.graph[vertex1].splice(i, 1);
			}
		}

		// Remove vertex 1 from vertex 2 array
		for (let i = 0; i < this.graph[vertex2].length; i++) {
			if (this.graph[vertex2][i] === vertex1) {
				this.graph[vertex2].splice(i, 1);
			}
		}

		// Remove vertices from the graph, if they don't have any edges
		if (this.graph[vertex1].length == 0) {
			delete this.graph[vertex1];
		}

		if (this.graph[vertex2].length == 0) {
			delete this.graph[vertex2];
		}
	}

	removeVertex(vertex) {
		// Get all the edges connected to that vertex and remove all those edges
		let connectedVertices = this.graph[vertex];

		for (let vertex2 of connectedVertices) {
			this.removeEdge(vertex, vertex2);
		}

		// delete the key from the object
		delete this.graph[vertex];
	}

	dfsRecursive(source) {
		let dfsPath = [];
		let visited = new Map();
		let graph = this.graph;

		(function dfs(start) {
			if (!start) {
				return;
			}

			// Set source vertex as visited and add to path thus far.
			visited.set(start, true);
			dfsPath.push(start);

			let adjacentVertices = graph[start];

			for (let vertex of adjacentVertices) {
				if (!visited.has(vertex)) {
					dfs(vertex);
				}
			}
		})(source);

		return dfsPath;
	}

	dfsIterative(source) {
		let dfsPath = [];
		let visited = new Map();
		let graph = this.graph;
		let stack = [ source ];

		// We already have been provided with the source, so mark it as visited
		visited.set(source, true);

		while (stack.length > 0) {
			let currentVertex = stack.pop();

			// Add to path and add to visited map
			dfsPath.push(currentVertex);

			let adjacentVertices = graph[currentVertex];

			for (let vertex of adjacentVertices) {
				if (!visited.has(vertex)) {
					stack.push(vertex);
					visited.set(vertex, true);
				}
			}
		}

		return dfsPath;
	}


    bfs(source) {
        let bfsPath = [];
        let visited = new Map();
        let queue = [source];

        // Mark source as visited
        visited.set(source, true);

        while(queue.length) {
            let currentVertex = queue.shift();

            bfsPath.push(currentVertex);

            let adjacentVertices = this.graph[currentVertex];

            for (let vertex of adjacentVertices) {
                if (!visited.has(vertex)) {
                    queue.push(vertex);
                    visited.set(vertex, true);
                }
            }
        }

        return bfsPath;
    }
}

let g = new Graph();

// Vertices
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

// Edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('D', 'B');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dfsIterative('A'));
console.log(g.dfsRecursive('A'));
console.log(g.bfs('A'));

// graph.addVertex("Tokyo");
// graph.addVertex("Dallas");
// graph.addVertex("Aspen");
// graph.addVertex("Hong Kong");
// graph.addVertex("Los Angeles");
// graph.addEdge("Tokyo","Dallas");
// graph.addEdge("Tokyo","Hong Kong");
// graph.addEdge("Dallas","Aspen");
// graph.addEdge("Dallas","Hong Kong");
// graph.addEdge("Los Angeles","Dallas");
// graph.addEdge("Los Angeles","Hong Kong");
// console.log(graph);
// graph.removeEdge("Tokyo","Dallas");
// console.log(graph);
// graph.removeVertex("Hong Kong");
// console.log(graph);
