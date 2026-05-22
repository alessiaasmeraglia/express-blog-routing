function index(req, res) {
    res.json({
        message: "Lista dei post",
    });
}

function show(req, res) {
    const id = req.params.id;

    res.json({
        message: `Dettaglio del post ${id}`,
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