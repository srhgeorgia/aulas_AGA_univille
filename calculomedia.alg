BEGIN
    REAL nota1;
    REAL nota2;
    REAL media;
    
    PROC calculomedianotas = (REAL n1, REAL n2) REAL: (n1 + n2) / 2;
    
    print(("Digite a primeira nota: "));
    read((nota1));
    
    print(("Digite a segunda nota: "));
    read((nota2));
    
    media := calculomedianotas(nota1, nota2);
    print(("Sua média é: ",  fixed(media, -4, 2), newline))
    
END