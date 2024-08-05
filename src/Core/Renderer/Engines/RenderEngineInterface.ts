export interface RenderEngineInterface {
  id: string;
  version: number;
  title: string;
  description: string;
  thumbnail?: string;

   getComponent(): string;
}
