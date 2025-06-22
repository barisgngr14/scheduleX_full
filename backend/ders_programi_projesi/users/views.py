from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
from .forms import CustomAuthenticationForm
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email')
        password = data.get('password')

        User = get_user_model()

        try:
            user_obj = User.objects.get(email=email)
            user = authenticate(request, username=user_obj.email, password=password)
            if user is not None:
                login(request, user)
                # Mock token veriyormuş gibi davran
                fake_access = 'mock_access_token_123'
                fake_refresh = 'mock_refresh_token_456'
                return JsonResponse({
                    'access': fake_access,
                    'refresh': fake_refresh,
                    'message': 'Başarıyla giriş yapıldı (JWT gibi)'
                }, status=200)
            else:
                return JsonResponse({'error': 'Şifre yanlış'}, status=401)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Kullanıcı bulunamadı'}, status=404)

class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Kayıt başarılı!'}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def user_logout(request):
    logout(request)
    return redirect('index')
