+++
title = "Команды bt в aaPanel"
date = "2022-06-27T03:55:39+03:00"
tags = ['aaPanel']
draft = false
description = "Команды bt в aaPanel"
+++

### aaPanel Management script

Stop

```service bt stop```

Start

```service bt start```

Restart

```service bt restart```

Uninstall

```service bt stop && chkconfig --del bt && rm -f /etc/init.d/bt && rm -rf /www/server/panel```

View current port of control panel

```cat /www/server/panel/data/port.pl```

Change port of control panel，e.g. 8881（centos 6 Operation System）

```echo '8881' > /www/server/panel/data/port.pl && service bt restart iptables -I INPUT -p tcp -m state --state NEW -m tcp --dport 8881 -j ACCEPT service iptables save service iptables restart```

Change port of control panel，e.g. 8881（centos 7 Operation System）

```echo '8881' > /www/server/panel/data/port.pl && service bt restart firewall-cmd --permanent --zone=public --add-port=8881/tcp firewall-cmd --reload```

Force to change MySQL manager (root) Password，e.g. 123456

```cd /www/server/panel && python tools.py root 123456```

Change control Panel login password，e.g. 123456

```cd /www/server/panel && python tools.py panel 123456```

Site Configuration location

```/www/server/panel/vhost```

Delete banding domain of control panel

```rm -f /www/server/panel/data/domain.conf```

Clean login restriction

```rm -f /www/server/panel/data/*.login```

View control panel authorization IP

```cat /www/server/panel/data/limitip.conf```

Stop access restriction

```rm -f /www/server/panel/data/limitip.conf```

View permission domain

```cat /www/server/panel/data/domain.conf```

Turn off control panel SSL

```rm -f /www/server/panel/data/ssl.pl && /etc/init.d/bt restart```

View control panel error logs

```cat /tmp/panelBoot```

View database error log

```cat /www/server/data/*.err```

Site Configuration directory(nginx)

```/www/server/panel/vhost/nginx```

Site Configuration directory(apache)

```/www/server/panel/vhost/apache```

Site default directory

```/www/wwwroot```

Database backup directory

```/www/backup/database```

Site backup directory

```/www/backup/site```

Site logs

```/www/wwwlogs```

### Nginx

nginx installation directory

```/www/server/nginx```

Start

```service nginx start```

Stop

```service nginx stop```

Restart

```service nginx restart```

Reload

```service nginx reload```

nginx Configuration

```/www/server/nginx/conf/nginx.conf```

### Apache

apache installation directory

```/www/server/httpd```

Start

```service httpd start```

Stop

```service httpd stop```

Restart

```service httpd restart```

Reload

```service httpd reload```

apache Configuration

```/www/server/apache/conf/httpd.conf```

### MySQL

mysql installation directory

```/www/server/mysql```

phpmyadmin installation directory

```/www/server/phpmyadmin```

Data storage directory

```/www/server/data mysql```

Start

```service mysqld start```

Stop

```service mysqld stop```

Restart

```service mysqld restart```

Reload

```service mysqld reload```

mysql Configuration

```/etc/my.cnf```

### FTP

ftp installation directory

```/www/server/pure-ftpd```

Start

```service pure-ftpd start```

Stop

```service pure-ftpd stop```

Restart

```service pure-ftpd restart```

ftp Configuration

```/www/server/pure-ftpd/etc/pure-ftpd```

### PHP

php installation directory

```/www/server/php```

Start(Please modify by PHP version, e.g. service php-fpm-54 start)

```servicephp-fpm-{52|53|54|55|56|70|71|72|73|74|80|81} start```

Stop(Please modify by PHP version, e.g. service php-fpm-54 stop)

```service php-fpm-{52|53|54|55|56|70|71|72|73|74|80|81} stop```

Restart(Please modify by PHP version, e.g. service php-fpm-54 restart)

```service php-fpm-{52|53|54|55|56|70|71|72|73|74|80|81} restart```

Reload(Please modify by PHP version, e.g. service php-fpm-54 reload)

```service php-fpm-{52|53|54|55|56|70|71|72|73|74|80|81} reload```

Configuration(Please modify by PHP version, e.g. /www/server/php/52/etc/php.ini)

```/www/server/php/{52|53|54|55|56|70|71|72|73|74|80|81}/etc/php.ini```

### Redis

redis installation directory

```/www/server/redis```

Start

```service redis start```

Stop

```service redis stop```

redis Configuration

```/www/server/redis/redis.conf```

### Memcached

memcached installation directory

```/usr/local/memcached```

Start

```service memcached start```

Stop

```service memcached stop```

Restart

```service memcached restart```

Reload

```service memcached reload```