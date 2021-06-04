import { injectable } from 'inversify';
import URI from '@theia/core/lib/common/uri';
import { EditorManager, EditorOpenerOptions } from '@theia/editor/lib/browser/editor-manager';
import { WidgetOpenerOptions } from '@theia/core/lib/browser/widget-open-handler';
import { EditorWidget } from '@theia/editor/lib/browser/editor-widget';

@injectable()
export class CustomEditorManager extends EditorManager {

    canHandle(uri: URI, options?: WidgetOpenerOptions): number {
        return 100;
    }

    async open(uri: URI, options?: EditorOpenerOptions): Promise<EditorWidget> {
        console.log(`'CustomEditorManager' called for uri='${uri.toString()}'`);
        const editor = await super.open(uri, options);
        this.revealSelection(editor, options, uri);
        return editor;
    }

}
