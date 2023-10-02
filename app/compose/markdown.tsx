import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'; // Import the CSS for styling

interface MarkdownEditorProps {
  markdownContent: string;
  handleChange: (newValue: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdownContent, handleChange }) => {
  return (
    <SimpleMDE
      value={markdownContent}
      onChange={handleChange}
    />
  );
};

export default MarkdownEditor
