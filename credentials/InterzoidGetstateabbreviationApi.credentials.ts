import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetstateabbreviationApi implements ICredentialType {
        name = 'N8nDevInterzoidGetstateabbreviationApi';

        displayName = 'Interzoid Getstateabbreviation API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetstateabbreviation/interzoid-getstateabbreviation.png', dark: 'file:../nodes/InterzoidGetstateabbreviation/interzoid-getstateabbreviation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getstateabbreviation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
