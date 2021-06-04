import { ContainerModule } from 'inversify';
import { CustomEditorManager } from './custom-editor-manager';
import { OpenHandler } from '@theia/core/lib/browser/opener-service';
import { EditorManager } from '@theia/editor/lib/browser/editor-manager';

export default new ContainerModule((bind, _unbind, _isBound, rebind) => {

    // Bind CustomEditorManager.
    bind(CustomEditorManager).toSelf().inSingletonScope();
    bind(OpenHandler).toService(CustomEditorManager);

    // Rebind existing EditorManager to CustomEditorManager.
    rebind(EditorManager).to(CustomEditorManager).inSingletonScope();
});
