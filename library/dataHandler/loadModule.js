const loadModulesFromList = async (
    listPath,
    listName,
    modulesPath,
) => {
    const res = await fetch(listPath);
    const moduleList = await res.json();

    var collection = {};

    for (const module of moduleList[listName]) {
        const loadedModule = await import(`${modulesPath}${module}`);
        collection[module.replace('.js', '')] = loadedModule.default;
    }

    return collection;
}

export default loadModulesFromList;
