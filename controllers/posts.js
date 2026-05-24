import posts from "../data/posts.js";

function index(req, res) {
    res.json({
        count: posts.length,
        items: posts,
    });
}

function show(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({
            error: "L'id deve essere un numero",
            item: null,
        });

        return;
    }

    const post = posts.find((post) => post.id === id);

    if (!post) {
        res.status(404).json({
            error: `Post con id ${id} non trovato`,
            item: null,
        });

        return;
    }

    res.json({
        error: null,
        item: post,
    });
}

function create(req, res) {
    res.json({
        message: "Creazione di un nuovo post",
    });
}

function update(req, res) {
    const id = req.params.id;

    res.json({
        message: `Modifica del post ${id}`,
    });
}

function destroy(req, res) {
    const id = req.params.id;

    res.json({
        message: `Cancellazione del post ${id}`,
    });
}

export { index, show, create, update, destroy };