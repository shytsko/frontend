// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в
// качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
function findElementByClass(rootElement, className) {
    if (rootElement.classList.contains(className)) return rootElement;

    const { children } = rootElement;
    for (let i = 0; i < children.length; i++) {
        const searchedElement = findElementByClass(children[i], className);
        if (searchedElement) return searchedElement;
    }
    return null;
}

const element = findElementByClass(
    document.body,
    "menu__category-title"
);

console.log(element);