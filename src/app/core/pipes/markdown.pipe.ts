import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
});

@Pipe({
  name: 'markdown',
  pure: true,
})
export class MarkdownPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined): SafeHtml {
    if (!value?.trim()) {
      return '';
    }

    const html = marked.parse(this.dedent(value), { async: false }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  /** Remove indentação comum das template strings do TypeScript. */
  private dedent(text: string): string {
    const lines = text.replace(/^\n/, '').replace(/\n\s*$/, '').split('\n');
    const indents = lines
      .filter((line) => line.trim().length > 0)
      .map((line) => line.match(/^(\s*)/)?.[1].length ?? 0);

    if (indents.length === 0) {
      return text.trim();
    }

    const minIndent = Math.min(...indents);
    return lines.map((line) => line.slice(minIndent)).join('\n');
  }
}
