import { ZodError, ZodIssue } from 'zod';
import { AlertTriangle, Info } from 'lucide-react';

interface ValidationErrorProps {
  error: ZodError;
}

const formatPath = (path: (string | number)[]): string => {
  return path.length > 0 ? path.join(' → ') : 'root';
};

const getErrorMessage = (issue: ZodIssue): string => {
  switch (issue.code) {
    case 'invalid_type':
      return `Expected ${issue.expected}, but received ${issue.received}`;
    case 'invalid_string':
      if (issue.validation === 'email') {
        return 'Invalid email format';
      }
      if (issue.validation === 'url') {
        return 'Invalid URL format';
      }
      return `Invalid string: ${issue.validation}`;
    case 'too_small':
      return `Value is too small. Minimum: ${issue.minimum}`;
    case 'too_big':
      return `Value is too big. Maximum: ${issue.maximum}`;
    case 'invalid_literal':
      return `Expected "${issue.expected}"`;
    case 'unrecognized_keys':
      return `Unrecognized keys: ${issue.keys.join(', ')}`;
    case 'invalid_union':
      return 'Invalid union value';
    case 'invalid_enum_value':
      return `Invalid enum value. Expected: ${issue.options.join(' | ')}`;
    case 'invalid_arguments':
      return 'Invalid function arguments';
    case 'invalid_return_type':
      return 'Invalid function return type';
    case 'invalid_date':
      return 'Invalid date';
    case 'custom':
      return issue.message || 'Custom validation failed';
    default:
      return issue.message || 'Validation error';
  }
};

const getReceivedValue = (issue: ZodIssue): any => {
  if ('received' in issue) {
    return issue.received;
  }
  return undefined;
};

export function ValidationError({ error }: ValidationErrorProps) {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg border border-red-200">
        <div className="bg-red-600 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6" />
            <h1 className="text-xl font-bold text-red-100">
              Data Validation Failed
            </h1>
          </div>
          <p className="mt-2 text-red-100">
            The resume data doesn't match the expected schema.
            Please fix the following issues:
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {error.issues.map((issue, index) => {
              const receivedValue = getReceivedValue(issue);

              return (
                <div
                  key={index}
                  className="border border-red-200 rounded-lg p-4 bg-red-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-2">
                        <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-mono">
                          {formatPath(issue.path)}
                        </code>
                        <span className="text-red-600 text-sm font-medium">
                          {issue.code}
                        </span>
                      </div>
                      <p className="text-red-700 font-medium">
                        {getErrorMessage(issue)}
                      </p>
                      {receivedValue !== undefined && (
                        <p className="text-red-600 text-sm mt-1">
                          Received value: <code className="bg-red-100 px-1 rounded">{JSON.stringify(receivedValue)}</code>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="flex items-center space-x-2 text-blue-800 font-medium mb-2">
              <Info className="w-5 h-5" />
              <span>How to fix:</span>
            </h3>
            <ul className="text-blue-700 text-sm space-y-1 ml-7">
              <li>• Check your data.json file for the issues listed above</li>
              <li>• Make sure all required fields are present</li>
              <li>• Verify data types match the expected schema</li>
              <li>• Ensure email addresses and URLs are properly formatted</li>
              <li>• Check for typos in field names</li>
            </ul>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Reload After Fixing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
