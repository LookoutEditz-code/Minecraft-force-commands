import { world, system } from "@minecraft/server";
import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui";
world.beforeEvents.itemUse.subscribe(ev => {
    system.run(() => {
        const form = new ModalFormData()
            .title("commands")
            .textField("Enter your command here", "This is a text box")
            .submitButton("done");
        if (ev.itemStack.typeId == "minecraft:stick") form.show(ev.source).then(res => {
            let command = res.formValues[0]
            ev.source.runCommand(`${command}`);
        });
    });
});
// Made by LookoutEditz 